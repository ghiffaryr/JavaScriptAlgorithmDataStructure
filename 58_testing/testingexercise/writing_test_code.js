/*
Dari proses pengujian di atas, jenis-jenis pengujian dalam pengembangan perangkat lunak secara umum dapat dibagi menjadi 4 jenis pengujian, yaitu:
1. Static test
Memastikan tidak adanya typo (naming convention yang standar) dan memastikan tidak ada error types.

2. Unit test
Dilakukan untuk memastikan bahwa setiap unit kode yang kita tulis sudah bisa bekerja sesuai harapan. Unit sendiri berarti komponen terkecil yang dapat diuji secara terisolasi dalam perangkat lunak yang kita buat, dapat berupa fungsi bahkan kelas jika kita menggunakan paradigma OOP. Proses ini juga dapat diautomasikan.

3. Integration test
Memastikan beberapa serangkaian fungsi yang saling ketergantungan satu sama lain berjalan semestinya. Proses pengujian ini dapat dilakukan secara diautomasikan dengan menuliskan script test.

4. End-to-End test
Proses pengujian sebuah aplikasi untuk menguji flow dari awal hingga akhir, layaknya seorang user saat menggunakan aplikasi. Memastikan bahwasanya aplikasi berfungsi selayaknya. Biasanya proses ini dapat dilakukan secara otomatis maupun manual oleh tester.
*/

// Menulis Kode Pengujian

// test('deskripsi dari testcase kamu', () => {
//     expect(perintah).matcher(nilai yang diekspektasikan);
// });
 
// contoh
test('dua tambah dua adalah empat', () => {
    expect(2+2).toBe(4);
});

// toBe(x)	bahwa nilai ekspektasi yang diharapkan adalah x
// toEqual(x)	bahwa nilai ekspektasi yang diharapkan sama dengan x
// toBeNull()	bahwa nilai ekspektasi yang diharapkan adalah null
// toBeTruthy()	bahwa nilai ekspektasi yang diharapkan adalah truth
// toBeFalsy()	bahwa nilai ekspektasi yang diharapkan adalah false