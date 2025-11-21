let jadwal = [
  { hari: "Senin", matkul: "Matematika Diskrit", jam: "08:00-10:00" },
  { hari: "Selasa", matkul: "Pemrograman Dasar", jam: "10:00-12:00" },
  { hari: "Rabu", matkul: "Basis Data", jam: "08:00-10:00" },
  { hari: "Kamis", matkul: "Algoritma & Struktur Data", jam: "10:00-12:00" },
  { hari: "Jumat", matkul: "Sistem Operasi", jam: "08:00-10:00" },
  { hari: "Sabtu", matkul: "Praktikum Pemrograman", jam: "10:00-12:00" }
];

const tableBody = document.querySelector("#jadwal-table tbody");

function renderTable() {
  tableBody.innerHTML = "";
  jadwal.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.hari}</td>
      <td>${item.matkul}</td>
      <td>${item.jam}</td>
      <td>
        <button class="edit" onclick="editJadwal(${index})">Edit</button>
        <button class="delete" onclick="deleteJadwal(${index})">Hapus</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function editJadwal(index) {
  const newHari = prompt("Hari:", jadwal[index].hari);
  const newMatkul = prompt("Mata Kuliah:", jadwal[index].matkul);
  const newJam = prompt("Jam:", jadwal[index].jam);
  if (newHari && newMatkul && newJam) {
    jadwal[index] = { hari: newHari, matkul: newMatkul, jam: newJam };
    renderTable();
  }
}

function deleteJadwal(index) {
  if (confirm("Apakah yakin ingin menghapus jadwal ini?")) {
    jadwal.splice(index, 1);
    renderTable();
  }
}

document.getElementById("form-jadwal").addEventListener("submit", (e) => {
  e.preventDefault();
  const hari = document.getElementById("hari").value;
  const matkul = document.getElementById("matkul").value;
  const jam = document.getElementById("jam").value;
  jadwal.push({ hari, matkul, jam });
  renderTable();
  e.target.reset();
});

renderTable();