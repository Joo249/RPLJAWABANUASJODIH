var daftarBarang = [];

document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var namaBarang = document.getElementById('namaBarang').value;
    var jumlah = parseInt(document.getElementById('jumlah').value);

    if (namaBarang && !isNaN(jumlah)) {
        var barang = { namaBarang: namaBarang, jumlah: jumlah };
        daftarBarang.push(barang);
        showDaftarBarang();

        document.getElementById('namaBarang').value = '';
        document.getElementById('jumlah').value = '';
    } else {
        alert('Nama barang dan jumlah harus diisi dengan benar.');
    }
});

function showDaftarBarang() {
    var daftarBarangElement = document.getElementById('daftarBarang');
    daftarBarangElement.innerHTML = '';

    daftarBarang.forEach(function(barang, index) {
        var barangElement = document.createElement('li');
        barangElement.innerHTML = `
            <span>${barang.namaBarang} - Jumlah: ${barang.jumlah}</span>
            <button class="editButton" data-index="${index}">Edit</button>
            <button class="deleteButton" data-index="${index}">Hapus</button>
        `;

        barangElement.querySelector('.editButton').addEventListener('click', function() {
            editBarang(index);
        });

        barangElement.querySelector('.deleteButton').addEventListener('click', function() {
            deleteBarang(index);
        });

        daftarBarangElement.appendChild(barangElement);
    });
}

function editBarang(index) {
    var barang = daftarBarang[index];

    document.getElementById('namaBarang').value = barang.namaBarang;
    document.getElementById('jumlah').value = barang.jumlah;

    document.getElementById('editButton').style.display = 'inline-block';
    document.getElementById('cancelButton').style.display = 'inline-block';

    document.getElementById('inputForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var namaBarang = document.getElementById('namaBarang').value;
        var jumlah = parseInt(document.getElementById('jumlah').value);

        if (namaBarang && !isNaN(jumlah)) {
            daftarBarang[index].namaBarang = namaBarang;
            daftarBarang[index].jumlah = jumlah;
            showDaftarBarang();

            document.getElementById('namaBarang').value = '';
            document.getElementById('jumlah').value = '';
            document.getElementById('editButton').style.display = 'none';
            document.getElementById('cancelButton').style.display = 'none';
        } else {
            alert('Nama barang dan jumlah harus diisi dengan benar.');
        }
    });
}

function deleteBarang(index) {
    daftarBarang.splice(index, 1);
    showDaftarBarang();
}

document.getElementById('editButton').addEventListener('click', function() {
    document.getElementById('namaBarang').value = '';
    document.getElementById('jumlah').value = '';
    document.getElementById('editButton').style.display = 'none';
    document.getElementById('cancelButton').style.display = 'none';
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('namaBarang').value = '';
    document.getElementById('jumlah').value = '';
    document.getElementById('editButton').style.display = 'none';
    document.getElementById('cancelButton').style.display = 'none';
});

showDaftarBarang();
