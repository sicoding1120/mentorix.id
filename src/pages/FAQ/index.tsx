import Footer from "@/frontends/components/footer";
import Navbar from "@/frontends/components/navbar";
import { Icon24Hours, Icon360, Icon360View, IconMail, IconMessageCircleMinus, IconPaperBag, IconPaperclip, IconRecordMail, IconSTurnDown } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full skeleton pt-16">
        <div className="flex flex-col justify-center items-center gap-4 py-24">
          <p className="text-base text-slate-400">FAQs</p>
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-400 text-center">
            Punya pertanyaan? Kami disini untuk membantu anda.
          </p>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <div className="md:px-24 px-3 py-32">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-24 gap-12">
          <div className="flex flex-col gap-4 w-96">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconMessageCircleMinus size={36} />
                </div>
              </div>
            </div>
            <h3>Bagaimana Cara Saya Mengganti Email Akun Saya?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 w-96">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconPaperBag size={36} />
                </div>
              </div>
            </div>
            <h3>Bagaimana Cara Saya Mengganti Email Akun Saya?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 w-96">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconPaperclip size={36} />
                </div>
              </div>
            </div>
            <h3>Bagaimana Cara Saya Mengganti Email Akun Saya?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 w-96">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <Icon24Hours size={36} />
                </div>
              </div>
            </div>
            <h3>Bagaimana Cara Saya Mengganti Email Akun Saya?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 w-96">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconMail size={36} />
                </div>
              </div>
            </div>
            <h3>Bagaimana Cara Saya Mengganti Email Akun Saya?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 w-96">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <Icon360View size={36} />
                </div>
              </div>
            </div>
            <h3>Bagaimana Cara Saya Mengganti Email Akun Saya?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 w-96">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <Icon360 size={36} />
                </div>
              </div>
            </div>
            <h3>Bagaimana Cara Saya Mengganti Email Akun Saya?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 w-96">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconSTurnDown size={36} />
                </div>
              </div>
            </div>
            <h3>Bagaimana Cara Saya Mengganti Email Akun Saya?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;

// menambahkan data pada tabel buku
// 1. Pemrograman Python Dasar, Andi Wijaya, 2018, 85000, 15
// 2. Pemrograman Web dengan PHP, Budi Raharjo, 2019, 90000, 10
// 3. Database MySQL untuk Pemula, Rina Setiawan, 2020, 75000, 20
// 4. Desain Web Modern, Indra Wicaksono, 2021, 65000, 5
// 5. Algoritma dan Struktur Data, Budi Raharjo, 2017, 100000, 8

// INSERT INTO Buku (Judul, Pengarang, Tahun_Terbit, Harga, Jumlah_Stok) VALUES ('Pemrograman Python Dasar', 'Andi Wijaya', 2018, 85000, 15), ('Pemrogramman Web dengan PHP', 'Budi Raharjo', 2019, 90000, 10), ('Database MySQL untuk Pemula', 'Rina Setiawan', 2020, 75000, 20), ('Desain Web Modern', 'Indra Wicaksono', 2021, 65000, 5), ('Algoritma dan Struktur Data', 'Budi Raharjo', 2017, 100000, 8);

// Tampilkan semua buku yang:

// Harganya di antara 70.000 dan 100.000.
// Judul bukunya tidak mengandung kata "Desain".

// SELECT * FROM Buku WHERE Harga BETWEEN 70000 AND 100000 AND Judul NOT LIKE '%Desain%';

// Buatlah sebuah tabel bernama Buku dengan struktur sebagai berikut:

// ID_Buku (Primary Key, INT, auto increment)
// Judul (VARCHAR, max 150 karakter)
// Pengarang (VARCHAR, max 100 karakter)
// Tahun_Terbit (YEAR)
// Harga (DECIMAL)
// Jumlah_Stok (INT)

// CREATE TABLE Buku (
//   ID_Buku INT PRIMARY KEY AUTO_INCREMENT,
//   Judul VARCHAR(150),
//   Pengarang VARCHAR(100),
//   Tahun_Terbit YEAR,
//   Harga DECIMAL,
//   Jumlah_Stok INT
// )

// Tampilkan semua buku yang:

// Diterbitkan di antara tahun 2018 dan 2021.
// Judul bukunya mengandung kata "Pemrograman".

// SELECT * FROM Buku WHERE Tahun_Terbit BETWEEN 2018 AND 2021 AND Judul LIKE '%Pemrograman%';

// Tampilkan total stok buku (Jumlah_Stok), harga rata-rata (AVG), serta harga tertinggi (MAX) dari buku, lalu kelompokkan hasil berdasarkan Pengarang. Hanya tampilkan pengarang yang memiliki total stok lebih dari 10 buku.

// SELECT Pengarang, SUM(Jumlah_Stok) AS Total_Stok, AVG(Harga) AS Rata_Rata_Harga, MAX(Harga) AS Harga_Tertinggi
// FROM Buku
// WHERE Tahun_Terbit BETWEEN 2018 AND 2021
// GROUP BY Pengarang
// HAVING Total_Stok > 10

// Tampilkan Judul, Pengarang, dan Harga dari buku yang ditulis oleh pengarang Budi Raharjo atau Rina Setiawan, dengan harga di atas 80.000, dan urutkan hasilnya berdasarkan Harga dari yang terendah ke tertinggi.

// SELECT Judul, Pengarang, Harga
// FROM Buku
// WHERE Pengarang IN ('Budi Raharjo', 'Rina Setiawan') AND Harga > 80000
// ORDER BY Harga
