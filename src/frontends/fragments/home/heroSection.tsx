"use client";
import Link from "next/link";
import React from "react";

const HeroSection = () => (
  <section className="md:bg-bg1 bg-cover bg-center bg-no-repeat md:h-screen h-[110vh] w-full md:px-14 px-4">
    <Topic />
  </section>
);

const Topic = () => (
  <div className="w-full h-full flex justify-center items-center px-24">
    <div className="flex flex-col gap-8 justify-center items-center">
      <h1 className="text-7xl font-bold text-green-400 text-center w-3/4">Mengubah Passion Menjadi Keahlian di Dunia Digital</h1>
      <p className="text-lg text-slate-400 w-2/3 text-center">MENTORIX adalah platform digital yang menyediakan mentor berpengalaman yang memudahkan anda untuk belajar serta mempercepat proses belajar.</p>
      <div className="flex gap-6 items-center ">
        <button className="btn btn-success text-white text-lg">Get in Touch</button>
        <div className="">|</div>
        <Link href={"/"} className="underline">Temukan paket yang cocok untuk Anda.</Link>
      </div>
    </div>
  </div>
);

export default HeroSection;


// membuat query sql untuk menambahkan 20 data pada tabel produk
// INSERT INTO `produk`(`NamaProduk`, `Harga`, `Stock`, `Kategori`) VALUES ('MOUSE',300000, 64,'GAMING'), ('MOUSE',250000, 65,'GAMING'), ('MOUSE',200000, 48,'GAMING'), ('KEYBAORD',340000, 76,'GAMING'), ('KEYBAORD',360000, 73,'GAMING'), ('KEYBAORD',200000, 46,'WORKPLUS'), ('SAMSUNG',1000000, 76,'BUTUT'), ('XIAOMI',900000, 96,'BUTUT'), ('IQOO',1000000, 76,'GAMING'), ('AXIOO',800000, 72,'GAMING'), ('MSI',900000, 74,'BUTUT'), ('ASUS',800000, 72,'BUTUT'), ('ASUS',700000, 70,'BUTUT'), ('ASUS',600000, 68,'BUTUT'), ('ASUS',500000, 66,'BUTUT'), ('ASUS',400000, 64,'BUTUT'), ('ASUS',300000, 62,'BUTUT'), ('ASUS',200000, 60,'BUTUT'), 

// Tampilkan total stok per kategori yang memiliki total stok lebih dari 50, dan urutkan berdasarkan total stok dari yang terbesar
// SELECT * FROM produk WHERE Stock > 50 ORDER BY Stock DESC

// Tampilkan semua produk yang namanya mengandung kata 'gaming' dengan stok di atas dari 20 dan urutkan hasilnya berdasarkan harga dari yang paling murah ke yang paling mahal.
// SELECT * FROM produk WHERE NamaProduk LIKE '%gaming%' AND Stock > 20 ORDER BY Harga

// Buatlah query SQL untuk menampilkan semua produk yang harganya antara 1jt hingga 5jt dan stoknya lebih dari 10, atau produk yang termasuk kategori 'Laptop'

// SELECT * FROM produk WHERE Harga BETWEEN 1000000 AND 5000000 AND Stock > 10 OR Kategori = 'Laptop'