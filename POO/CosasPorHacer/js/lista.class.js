
class Lista {
  contenido = '';
  localStorage;

  constructor(contenido) {
      this.contenido = contenido;
  }

  AgregarListaDOM(contenedor, origen) {
      const li = document.createElement('li');
      li.classList = 'list-group-item text-break';
      li.textContent = this.contenido;

      const btnEliminar = document.createElement('button');
      btnEliminar.classList = 'close';

      const span = document.createElement('span');
      span.classList = 'badge badge-pill text-danger';

      span.textContent = 'X';

      contenedor.appendChild(li);
      li.appendChild(btnEliminar);
      btnEliminar.appendChild(span);

      if (origen) ManipularLocalStorage.AgregarTweetLocalStorage(this.contenido);

  }
}