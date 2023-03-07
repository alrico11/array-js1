//unshift buat masukin data ke depan
//array.length-1 buat ambil nilai terakhir

console.log("TUGAS 1")
let wadah1 = ["gula","air","garam","beras","merica"]
console.log(wadah1[1])
console.log(wadah1[3])
wadah1.push("micin")
console.log(wadah1[5],"\n")

let wadah2 = ["buku tulis","koran","hvs","folio","A3"]
console.log(wadah2[1])
console.log(wadah2[3])
wadah2.push("merica")
console.log(wadah2[5],"\n")

let wadah3 = ["barcelona","r madrid","a madrid","r sociedad","r betis"]
console.log(wadah3[1])
console.log(wadah3[3])
wadah3.push("rayo")
console.log(wadah3[5],"\n",'================')

//Array 2D
// let wadah = [
//     ["gula","air","garam","beras","merica"],
//     ["buku tulis","koran","hvs","folio","A3"],
//     ["barcelona","r madrid","a madrid","r sociedad","r betis"]
// ]
let wadah = [
    wadah1,
    wadah2,
    wadah3
]
// console.log(wadahku)
console.log("TUGAS 2")
console.log(wadah[0][2])
console.log(wadah[0][4],"\n")
console.log(wadah[1][2])
console.log(wadah[1][4],"\n")
console.log(wadah[2][2])
console.log(wadah[2][4])