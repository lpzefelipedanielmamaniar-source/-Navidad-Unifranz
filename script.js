// Personaliza los nombres y mensajes aquí. Cada página usa su propio número.
const felicitaciones = {
  1: { nombre: 'Ingeniero 1', mensaje: 'Gracias por compartir sus conocimientos, su paciencia y dedicación. Le deseamos una Navidad llena de alegría y un nuevo año de éxitos.' },
  2: { nombre: 'Ingeniero 2', mensaje: 'Que estas fiestas estén llenas de paz, felicidad y momentos especiales. Gracias por acompañarnos en nuestra formación.' },
  3: { nombre: 'Ingeniero 3', mensaje: 'Gracias por guiarnos e inspirarnos a seguir aprendiendo. Le deseamos una hermosa Navidad y un excelente año nuevo.' }
};
const numero = Number(document.body.dataset.ingeniero);
const datos = felicitaciones[numero];
if (datos) {
  document.getElementById('nombre').textContent = datos.nombre;
  document.getElementById('mensaje').textContent = datos.mensaje;
  document.title = 'Feliz Navidad - ' + datos.nombre;
}
const nieve = document.getElementById('nieve');
for (let i=0;i<36;i++) {
 const copo=document.createElement('span');
 copo.className='copo';copo.textContent='❄';
 copo.style.left=Math.random()*100+'%';
 copo.style.fontSize=(10+Math.random()*16)+'px';
 copo.style.animationDuration=(5+Math.random()*9)+'s';
 copo.style.animationDelay=(-Math.random()*15)+'s';
 nieve.appendChild(copo);
}
