javascript
const galleryPage = document.getElementById("galleryPage");
const pendaftaranPage = document.getElementById("pendaftaranPage");

const navGallery = document.getElementById("navGallery");
const navPendaftaran = document.getElementById("navPendaftaran");

const form = document.getElementById("registrationForm");
const hasilPendaftaran = document.getElementById("hasilPendaftaran");
const dataHasil = document.getElementById("dataHasil");

// Berpindah tampilan Gallery dan Pendaftaran
function showPage(page) {
    const isGallery = page === "gallery";

    galleryPage.classList.toggle("hidden", !isGallery);
    pendaftaranPage.classList.toggle("hidden", isGallery);

    navGallery.classList.toggle("active", isGallery);
    navPendaftaran.classList.toggle("active", !isGallery);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Proses simpan pendaftaran
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const konfirmasi = confirm(
        "Apakah Anda sudah yakin untuk menyimpan?"
    );

    // Jika memilih Tidak / Cancel
    if (!konfirmasi) {
        return;
    }

    // Ambil seluruh data formulir
    const data = [
        ["NIK", document.getElementById("nik").value.trim()],
        ["Nama Lengkap", document.getElementById("nama").value.trim()],
        ["Jenis Kelamin", document.getElementById("jenisKelamin").value],
        ["Nomor HP", document.getElementById("nohp").value.trim()],
        ["Alamat", document.getElementById("alamat").value.trim()],
        ["Bahasa Pemrograman",
            document.getElementById("bahasa").value]
    ];

    // Tampilkan hasil sesuai isian
    dataHasil.replaceChildren();

    data.forEach(function (item) {
        const baris = document.createElement("div");
        baris.className = "result-row";

        const label = document.createElement("strong");
        label.textContent = item[0];

        const nilai = document.createElement("span");
        nilai.textContent = item[1];

        baris.appendChild(label);
        baris.appendChild(nilai);

        dataHasil.appendChild(baris);
    });

    hasilPendaftaran.classList.remove("hidden");

    hasilPendaftaran.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Daftar kembali
function resetPendaftaran() {
    form.reset();
    hasilPendaftaran.classList.add("hidden");
    dataHasil.replaceChildren();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}