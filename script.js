document.getElementById('barangForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    var namaBarang = document.getElementById('namaBarang').value;
    var deskripsiBarang = document.getElementById('deskripsiBarang').value;
    var jumlahBarang = parseInt(document.getElementById('jumlahBarang').value);
    var kategoriBarang = document.getElementById('kategoriBarang').value;
    
    // Create barang element
    var barangElement = document.createElement('div');
    barangElement.classList.add('barang');
    barangElement.innerHTML = `
        <h2>${namaBarang}</h2>
        <p>Deskripsi: ${deskripsiBarang}</p>
        <p>Jumlah: ${jumlahBarang}</p>
        <p>Kategori: ${kategoriBarang}</p>
        <button class="editButton">Edit</button>
        <button class="deleteButton">Hapus</button>
    `;

    // Append barang element to the daftar barang
    var daftarBarang = document.getElementById('daftarBarang');
    daftarBarang.appendChild(barangElement);

    // Reset form fields
    document.getElementById('namaBarang').value = '';
    document.getElementById('deskripsiBarang').value = '';
    document.getElementById('jumlahBarang').value = '';
    document.getElementById('kategoriBarang').value = '';
});

document.getElementById('daftarBarang').addEventListener('click', function(e) {
    if (e.target.classList.contains('editButton')) {
        // TODO: Implement edit functionality
        alert('Fitur edit belum diimplementasikan.');
    } else if (e.target.classList.contains('deleteButton')) {
        e.target.parentNode.remove();
    }
});
