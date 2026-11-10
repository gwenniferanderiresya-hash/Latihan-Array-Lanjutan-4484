
const daftarBuku = [
    "HTML Dasar",
    "CSS Dasar",
    "JavaScript Dasar",
    "PHP Dasar"
];

// 1. Menampilkan daftar buku awal
console.log("Daftar buku awal:", daftarBuku);

// 2. Mencari posisi CSS Dasar
const posisiCSS = daftarBuku.indexOf("CSS Dasar");
console.log("Posisi CSS Dasar:", posisiCSS);

// 3. Mengganti CSS Dasar menjadi CSS Modern
if (posisiCSS !== -1) {
    daftarBuku.splice(posisiCSS, 1, "CSS Modern");
}
console.log("Setelah mengganti CSS:", daftarBuku);

// 4. Menambahkan Git Dasar setelah JavaScript Dasar
const posisiJS = daftarBuku.indexOf("JavaScript Dasar");

if (posisiJS !== -1) {
    daftarBuku.splice(posisiJS + 1, 0, "Git Dasar");
}
console.log("Setelah menambahkan Git:", daftarBuku);

// 5. Menghapus PHP Dasar
const posisiPHP = daftarBuku.indexOf("PHP Dasar");

if (posisiPHP !== -1) {
    daftarBuku.splice(posisiPHP, 1);
}
console.log("Setelah menghapus PHP:", daftarBuku);

// 6. Menampilkan daftar buku akhir
console.log("Daftar buku akhir:", daftarBuku);

// 7. Menghitung jumlah buku
console.log("Jumlah buku tersisa:", daftarBuku.length);
