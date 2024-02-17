class UsuarioClase {
  nombre: string;
  edad: number;
  private genero?: string;

  constructor(nombre: string, edad: number, genero?: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  getGenero() {
    if (this.genero) {
      return this.genero;
    } else {
      console.error("Este usuario no proporciono su genero");
      return null;
    }
  }
}

const persona: UsuarioClase = new UsuarioClase("Jorge", 22);

persona.getGenero();
