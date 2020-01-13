import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


export const CriaLote  = functions.firestore.document('Lote/{loteId}').onCreate(async(snapshot, context) => {

        const lote:any = snapshot.data();

        const data:any = new Date();

        const dia:number = data.getDate();
        const mes:number = (data.getMonth() + 1);
        const ano:number = data.getFullYear();

        lote.dataAbertura.dia = dia.toString().padStart(2, '0');
        lote.dataAbertura.mes = mes.toString().padStart(2, '0');
        lote.dataAbertura.ano = ano.toString();

        lote.status = 'EM ABERTO';
        lote.qtdTitulo = 0;

    try{
        await admin.firestore().collection('Lote').orderBy('numeroLote','desc').limit(1).get().then(async (docRef)=>{
            const ultimoLote:any = docRef.docs[0].data();

            console.log(ultimoLote);
            if(ultimoLote === undefined || ultimoLote === null || docRef.empty){
                lote.numeroLote = 1;
            }else{
                lote.numeroLote = ultimoLote.numeroLote + 1;
                console.log(lote.numeroLote);
            }

            await admin.firestore().collection('Lote').doc(context.params.loteId).update(lote).then(()=>{
                return;
            });

        });
    }catch(error){
        console.log(error);
    }

});

export const CriaDevedor  = functions.firestore.document('Devedor/{devedorId}').onCreate(async(snapshot, context) => {

    try{
        const devedorId:any = context.params.devedorId;
        let devedor:any = snapshot.data();
        devedor.idDevedor = devedorId;


        await admin.firestore().collection('Devedor').doc(devedorId).update(devedor).then(()=>{
           console.log('funcionou');
           return;

        }).catch((error)=>{
            console.log(error);
            return;
        })
    }catch(error){
        console.log(error);
    }

});

export const criarTitulo  = functions.firestore.document('Titulo/{tituloId}').onCreate(async(snapshot, context) => {

    try{
        const tituloId:any = context.params.tituloId;
        let titulo:any = snapshot.data();
        titulo.idTitulo = tituloId;


        await admin.firestore().collection('Titulo').doc(tituloId).update(titulo).then(()=>{
           console.log('funcionou');
           return;

        }).catch((error)=>{
            console.log(error);
            return;
        });
    }catch(error){
        console.log(error);
    }

});

export const deletarTitulo = functions.firestore.document('Titulo/{tituloId}').onDelete( async (snapshot, context) => {
    const idTitulo:string = context.params.tituloId;

    try{
        await admin.firestore().collection('TituloDevedor').
            where('idTitulo', '==', idTitulo).
                get().then(async (data)=>{
                    for (let i = 0; i < data.size; i++) {

                        await admin.firestore().
                            collection('TituloDevedores').
                                doc(data.docs[i].id).delete();

                    }
                });
    }catch(error){
        console.log(error);
    }
})


export const deletarLote = functions.firestore.document('Lote/{loteId}').onDelete( async (snapshot, context)=> {

    try{

        await admin.firestore().collection('Titulo').
            where('idLote', '==', context.params.loteId).get().then(async (data)=>{
                for( let i = 0; i < data.size; i++){
                    await admin.firestore().collection('Titulo').doc(data.docs[i].id).delete();
                }

                return;
            });
    }catch(error){
        console.log(error);
        return;
    }
    
});

// export const ApagarTitulo = functions.firestore.document('Titulo/{tituloId}').onDelete(async (snapshot, context)=>{
//     try{
//         const titulo:any = snapshot.data();
//         await admin.firestore().collection('Lote').doc(titulo.idLote).update({
//                 qtdTitulo: admin.firestore.FieldValue.increment(-1),
//                 valorTotalTitulo:admin.firestore.FieldValue.increment(-titulo.valorProtesto)
//         });

//         await admin.firestore().collection('TituloDevedor').
//             where('idTitulo', '==', titulo.idTitulo).get().then(async (data)=>{
//                 for(let tituloDevedor of data.docs) {
//                     await admin.firestore().collection('TituloDevedor').doc(tituloDevedor.id).delete().then(()=>{
//                         return;
//                     });
//                 }
//         })
//     }catch(error){
//         console.log(error);
//     }
// });



