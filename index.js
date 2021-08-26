let userForm = document.getElementById('user-form');
let userPage = document.getElementById('user-page');
const homepage = document.getElementById('homepage');
const selectHospital = document.getElementById('selectHospital');
let selectedCity = document.getElementById('selected-city');
let selectedDisease = document.getElementById('selected-disease');

userForm.addEventListener('submit', function (e) {
  e.preventDefault();
  tarikData(e);
  pindahHalaman2();
});

function tarikData(event) {
  console.log(event.target[0].value);
}

//Jika value input  = databaseRS[namaKota]
//&& Jika penyakit nya kelas I dan databaseRS[namaKota][kamarTersedia][kelas] != 0

function pindahHalaman2() {
  // userPage.classList.add('d-none');
  homepage.classList.add('d-none');
  selectHospital.classList.remove('d-none');
}

function listRumahSakit(dataRS, dataPenyakit) {
  
  Jika selectedCity.
  // output = {
  //   nama: inputanNama,
  //   rumahSakit: [
  //     {
  //       nama: 'RS Harapan Kasih',
  //       alamat: 'Jl. Mangga no. 10',
  //       kontak: '021-5362745',
  //       kamarTersedia: jumlah
  //     },
  //     {
  //       nama: 'RS Bunda',
  //       alamat: 'Jl. Pear no. 1102',
  //       kontak: '021-5345555',
  //       kamarTersedia: jumlah
  //     }
  //   ]
  };

  const rumahSakitList = [//PENTING!!
    {
      nama: 'RS Harapan Kasih',
      alamat: 'Jl. Mangga no. 10',
      kontak: '021-5362745',
      kamarTersedia: 0
    },
    {
      nama: 'RS Bunda',
      alamat: 'Jl. Pear no. 1102',
      kontak: '021-5345555',
      kamarTersedia: 0
    }
  ];

  const listRumahSakitDOM = document.getElementById('listRumahSakit');
  let output = ``;

  for (const rumahSakit of rumahSakitList) {
    output += `<div class="card m-2" style="width: 18rem">
    <img
      src="..."
      class="card-img-top"
      alt="${rumahSakit.nama}"
    />
    <div class="card-body">
      <h5 class="card-title">${rumahSakit.nama}</h5>
      <p class="card-text">${rumahSakit.alamat}</p>
      <a href="#" class="btn btn-block btn-primary">Pilih</a>
    </div>
  </div>`;
  }

  listRumahSakitDOM.innerHTML = output;
}

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

//database penyakit dengan kelasnya
const databasePenyakit = {
  I: ['Rabies', 'HIV', 'Smallpox', 'COPID'],

  II: ['Hepatitis', 'Malaria', 'Tetanus', 'Infeksi'],

  III: ['Diare', 'Sakit Kepala', 'Iritasi', 'Lapar']
};
