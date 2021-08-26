const databaseRS = {
  jaksel: [
    {
      nama: 'RS Harapan Kasih',
      alamat: 'Jl. Mangga no. 10',
      kontak: '021-5362745',
      kamarTersedia: {
        I: 50,
        II: 50,
        III: 0
      }
    },
    {
      nama: 'RS Bunda',
      alamat: 'Jl. Pear no. 1102',
      kontak: '021-5345555',
      kamarTersedia: {
        I: 5,
        II: 10,
        III: 2
      }
    },
    {
      nama: 'RS Cahaya',
      alamat: 'Jl. Cahaya no. 28',
      kontak: '021-999999',
      kamarTersedia: {
        I: 0,
        II: 1,
        III: 0
      }
    }
  ],
  jakbar: [
    {
      nama: 'RS Air Api',
      alamat: 'Jl. Raya no. 00',
      kontak: '021-2323425',
      kamarTersedia: {
        I: 20,
        II: 4,
        III: 11
      }
    },
    {
      nama: 'RS Bapak',
      alamat: 'Jl. Hulu no. 41',
      kontak: '021-000000',
      kamarTersedia: {
        I: 12,
        II: 49,
        III: 20
      }
    },
    {
      nama: 'RS Kebun Labu',
      alamat: 'Jl. Labu no. 88',
      kontak: '021-094353',
      kamarTersedia: {
        I: 1,
        II: 0,
        III: 0
      }
    }
  ],
  jakut: [
    {
      nama: 'RS Utara',
      alamat: 'Jl. Selatan no. 24',
      kontak: '021-738625',
      kamarTersedia: {
        I: 0,
        II: 2,
        III: 0
      }
    },
    {
      nama: 'RS Selamat',
      alamat: 'Jl. Baru no. 22',
      kontak: '021-10294',
      kamarTersedia: {
        I: 12,
        II: 19,
        III: 3
      }
    },
    {
      nama: 'RS Sungai',
      alamat: 'Jl. Koi no. 80',
      kontak: '021-02737',
      kamarTersedia: {
        I: 27,
        II: 0,
        III: 0
      }
    }
  ],
  jakpus: [
    {
      nama: 'RS Pusat',
      alamat: 'Jl. Monas no. 2124',
      kontak: '021-593322',
      kamarTersedia: {
        I: 90,
        II: 1000,
        III: 13
      }
    },
    {
      nama: 'RS Hacktiv',
      alamat: 'Jl. Hacktiv no. 88',
      kontak: '021-888888',
      kamarTersedia: {
        I: 21,
        II: 41,
        III: 12
      }
    },
    {
      nama: 'RS Kota',
      alamat: 'Jl. Kota no. 100',
      kontak: '021-402456',
      kamarTersedia: {
        I: 130,
        II: 11,
        III: 0
      }
    }
  ],
  jaktim: [
    {
      nama: 'RS Bootstrap',
      alamat: 'Jl. Pusing no. 80',
      kontak: '021-446373',
      kamarTersedia: {
        I: 11,
        II: 1,
        III: 9
      }
    },
    {
      nama: 'RS Bayi',
      alamat: 'Jl. Ibu no. 90',
      kontak: '021-162534',
      kamarTersedia: {
        I: 0,
        II: 2,
        III: 15
      }
    },
    {
      nama: 'RS 88',
      alamat: 'Jl. Delapan no. 90',
      kontak: '021-124789',
      kamarTersedia: {
        I: 8,
        II: 8,
        III: 8
      }
    }
  ]
};

const databasePenyakit = {
  I: ['Rabies', 'HIV', 'Smallpox', 'COPID'],

  II: ['Hepatitis', 'Malaria', 'Tetanus', 'Infeksi'],

  III: ['Diare', 'Sakit Kepala', 'Iritasi', 'Lapar']
};

let userForm = document.getElementById('user-form');
let userPage = document.getElementById('user-page');
const homepage = document.getElementById('homepage');
const selectHospital = document.getElementById('selectHospital');

userForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const dataPasien = tarikData(e); // {nama: luis, domisili: jaksel, penyakit: diare}
  console.log(dataPasien);

  pindahHalaman2();
});
//JS algo here!!!

function tarikData(event) {
  const nama = event.target[0].value;
  const domisili = event.target[1].value;
  const penyakit = event.target[2].value;

  if (
    !nama ||
    domisili === 'Cari Lokasi Loe!' ||
    penyakit === 'Loe Sakit Apa?'
  ) {
    alert('DATA LOE GAK LENGKAP!');
  }

  return {
    nama,
    domisili,
    penyakit
  };
}

function pindahHalaman2() {
  homepage.classList.add('d-none');
  selectHospital.classList.remove('d-none');
}