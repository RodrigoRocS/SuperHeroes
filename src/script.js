import Swal from 'sweetalert2';
import '../style.css';

const pegaBtn = document.querySelector('button');

const magicNumb = 731;
const randomId = () => Math.floor((Math.random() * magicNumb) + 1);
console.log(randomId);

const pegaInfo = () => fetch(`https://www.superheroapi.com/api.php/5861189323958335/${randomId()}/image`)
  .then((response) => response.json());

pegaBtn.addEventListener('click', () => {
  pegaInfo()
    .then((data) => {
      const { name, url } = data;
      Swal.fire({
        imageUrl: url,
        title: name,
        imageHeight: '400px',
        width: '340px',
      });
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
