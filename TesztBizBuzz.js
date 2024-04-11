import { bizBuzz } from "./bizzbuzz.js";
export function tesztBizBuz(){
    const tesztLISTA = [
        {
          n: 0,
          vart: "nincs ilyen sorozat",
        },
        {
          n: -1,
          vart: "nincs ilyen sorozat",
        },
        {
          n: 1,
          vart: "1",
        },
        {
          n: 2,
          vart: "1, BIZ",
        },
      ];
    let n=0
    tesztLISTA.forEach((tesztEset,index)=>{
        console.log("🐐")
        let fvEredmeny=bizBuzz(tesztEset.n);
        console.assert(tesztEset.vart === fvEredmeny,"%o",`n: ${tesztEset.n} vart:${tesztEset.vart} kapott:${fvEredmeny} hiba`)
    })
}
