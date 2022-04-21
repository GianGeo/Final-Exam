// contact list, don't change this.
const contactsList = [
  {
    name: 'Togusa',
    phone: '555 555-5555',
    image: 'togusa.png',
    email: 'togusa@secnine.com',
    ID: '0',
  },
  {
    name: 'Tachikoma',
    phone: '555 555-5555',
    image: 'tachikoma.png',
    email: 'tachikoma@secnine.com',
    ID: '1',
  },
  {
    name: 'Saito',
    phone: '555 555-5555',
    image: 'saito.png',
    email: 'saito@secnine.com',
    ID: '2',
  },
  {
    name: '"major" Motoko',
    phone: '555 555-5555',
    image: 'motoko.png',
    email: 'motoko@secnine.com',
    ID: '3',
  },
  {
    name: 'Ishikawa',
    phone: '555 555-5555',
    image: 'ishikawa.png',
    email: 'ishikawa@secnine.com',
    ID: '4',
  },
  {
    name: 'Batou',
    phone: '555 555-5555',
    image: 'batou.png',
    email: 'batou@secnine.com',
    ID: '5',
  },
  {
    name: 'Aramaki',
    phone: '555 555-5555',
    image: 'aramaki.png',
    email: 'aramaki@secnine.com',
    ID: '6',
  },
];

// Your code goes here

function createcard() {
  count += 1;
  const card = getcard();
  clearcardArea();
  const cardDisplayArea = document.getElementById('.container');
  cardDisplayArea.insertAdjacentHTML(
    'display_all_contacts',
    cardTemplate(card)
  );
  const cardid = document.querySelector('#card-${count}');
  cardid.addEventListener('click', deleteCard);
}

function deleteCard(ev) {
  console.log(ev)
  if(ev.target.className ==="delete-card") {
    const id = ev.target.parentElement.id
    const card = document.querySelector('#${id}')
    card removeEventListener()
  }
}
