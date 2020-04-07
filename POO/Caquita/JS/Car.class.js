class Carro {
  posicionX = 0;
  posicionY = 0;

  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
  }

  MoverCarro(direccion, Imagen) {
    switch (direccion) {
      case "ArrowUp":
        if (this.posicionY <= -5) return;
        Imagen.src = "./../assets/carro_arriba.png";
        Imagen.style.top = `${(this.posicionY -= 10)}px`;
        break;

      case "ArrowLeft":
        if (this.posicionX <= -2) return;
        Imagen.src = "./../assets/carro_izquierda.png";
        Imagen.style.left = `${(this.posicionX -= 10)}px`;
        break;

      case "ArrowRight":
        if (this.posicionX >= 1050) return;
        Imagen.src = "./../assets/carro_derecha.png";
        Imagen.style.left = `${(this.posicionX += 10)}px`;
        break;

      case "ArrowDown":
        if (this.posicionY >= 500) return;
        Imagen.src = "./../assets/carro_abajo.png";
        Imagen.style.top = `${(this.posicionY += 10)}px`;
        break;
    }
  }

  verificarColision(PosicionesCaquitas = []) {
    console.log(this.posicionX, this.posicionY);
    for (let i = 0; i < PosicionesCaquitas.length; i++) {
      if (
        this.posicionX >= PosicionesCaquitas[i].styleLeft &&
        this.posicionX <= PosicionesCaquitas[i].styleLeftMax &&
        this.posicionY >= PosicionesCaquitas[i].styleTop &&
        this.posicionY <= PosicionesCaquitas[i].styleTopMax
      ) {
        return i;
      }
    }
    return null;
  }
}
