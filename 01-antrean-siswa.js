
const antreanSiswa = ["Andi", "Budi", "Citra"];

// 1. Menampilkan antrean awal
console.log("Antrean awal:", antreanSiswa);
console.log("Jumlah siswa:", antreanSiswa.length);

// 2. Menambahkan Deni di akhir
antreanSiswa.push("Deni");
console.log("Setelah push:", antreanSiswa);

// 3. Menambahkan Eka di awal
antreanSiswa.unshift("Eka");
console.log("Setelah unshift:", antreanSiswa);

// 4. Menghapus siswa pertama
const siswaPertama = antreanSiswa.shift();
console.log("Siswa yang dihapus:", siswaPertama);
console.log("Setelah shift:", antreanSiswa);

// 5. Menghapus siswa terakhir
const siswaTerakhir = antreanSiswa.pop();
console.log("Siswa yang dihapus:", siswaTerakhir);
console.log("Setelah pop:", antreanSiswa);

// 6. Menampilkan antrean akhir
console.log("Antrean akhir:", antreanSiswa);
console.log("Jumlah siswa tersisa:", antreanSiswa.length);
