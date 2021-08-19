class Card {
  constructor(name, cost, power, resilience) {
    this.name = name;
    this.cost = cost;
    this.power = power;
    this.resilience = resilience;
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    console.log(`disminuir la resistencia en: ${this.power / 4}`);
    target.resilience -= this.power / 4;
  }
  muestraEstadisticas() {
    console.log(
      `${this.name}, ${this.cost}, ${this.power}, ${this.resilience}`
    );
  }
}

class Effect extends Card {
  constructor(name, cost, text, stats, magnitude) {
    super(name, cost);
    this.text = text;
    this.stats = stats;
    this.magnitude = magnitude;
  }
  play(target) {
    if (target instanceof Unit) {
      console.log(this.text);
      target.resilience += this.magnitude;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
  play2(target) {
    if (target instanceof Unit) {
      console.log(this.text);
      target.resilience -= this.magnitude;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
  play3(target) {
    if (target instanceof Unit) {
      console.log(this.text);
      target.power += this.magnitude;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

const jugador1unidad1 = new Unit("NinjaCinturonRojo", 3, 3, 4);

const jugador2unidad2 = new Unit("NinjaCinturonNegro", 4, 5, 4);

const effect1 = new Effect(
  "Algoritmo Dificil",
  2,
  "Aumentar la resistencia del objetivo en 3",
  "Resilencia",
  3
);

const effect2 = new Effect(
  "Rechazo de promesa no manejado",
  1,
  "Reducir la resistencia del objetivo en 2",
  "Resilencia",
  2
);

const effect3 = new Effect(
  "Programacion en Pareja",
  3,
  "Aumentar el poder del objetivo en 2",
  "Poder",
  2
);

console.log(
  "Ronda 1 => jugador 1 convoca a Ninja Cinturon Rojo y juega Algoritmo Dificil"
);
jugador1unidad1.muestraEstadisticas();
effect1.play(jugador1unidad1);
jugador1unidad1.muestraEstadisticas();

console.log(
  "Ronda 2 => jugador 2 convoca a Ninja Cinturon Negro y juega Rechazo de promesa no manejado en Ninja Cinturon Rojo"
);
jugador2unidad2.muestraEstadisticas();
jugador1unidad1.muestraEstadisticas();
effect2.play2(jugador1unidad1);
jugador1unidad1.muestraEstadisticas();

console.log(
  "Ronda 3 => jugador 1 juega Programacion en pareja en Ninja Cinturon Rojo y Ataca a Ninja Cinturon Negro"
);
jugador1unidad1.muestraEstadisticas();
effect3.play3(jugador1unidad1);
jugador1unidad1.muestraEstadisticas();
jugador2unidad2.muestraEstadisticas();
jugador1unidad1.attack(jugador2unidad2);
jugador2unidad2.muestraEstadisticas();
