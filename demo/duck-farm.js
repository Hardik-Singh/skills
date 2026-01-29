// ============================================
// 🦆 DUCK FARM MANAGEMENT SYSTEM 🦆
// For the meta humor demo
// ============================================

class Duck {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.eggsLaid = 0;
    this.mood = "content";
  }

  quack() {
    return "quack";  // BUG: should be "Quack!" for production ducks
  }

  layEgg() {
    if (this.mood === "happy") {
      this.eggsLaid++;
      return true;
    }
    return false;  // BUG: ducks won't lay eggs because mood is never "happy"
  }
}

class DuckFarm {
  constructor() {
    this.ducks = [];
    this.totalEggs = 0;
  }

  addDuck(duck) {
    this.ducks.push(duck);
  }

  // BUG: Production environment (coop) keeps failing
  // Ducks won't go to their coops at night
  sendDucksToCoop() {
    for (let duck of this.ducks) {
      duck.location = "coop";
      // BUG: forgot to actually move them, just set a property
    }
    return this.ducks.filter(d => d.location === "coop").length;
  }

  // BUG: Feed conversion ratio is way down
  feedDucks(amount) {
    const perDuck = amount / this.ducks.length;
    this.ducks.forEach(duck => {
      duck.fed = perDuck;
      // BUG: should update mood to "happy" when fed, but doesn't
    });
  }

  // Daily egg collection
  collectEggs() {
    let collected = 0;
    this.ducks.forEach(duck => {
      if (duck.layEgg()) {
        collected++;
      }
    });
    this.totalEggs += collected;
    return collected;  // Always returns 0 because ducks are never happy
  }

  // Pipeline is broken (the water pipeline)
  checkWaterPipeline() {
    return {
      status: "leaking",  // memory leak... water leak... get it?
      pressure: null,     // null pointer... to the pond
      flow: undefined     // undefined behavior in production
    };
  }

  // Container won't run (the feed container)
  deployFeedContainer() {
    const container = {
      type: "feed-container",
      capacity: 50,
      run: function() {
        // Container can't run, it doesn't have legs
        throw new Error("Container does not have legs");
      }
    };
    return container;
  }
}

// Production deployment
const farm = new DuckFarm();
farm.addDuck(new Duck("Quackers", 2));
farm.addDuck(new Duck("Sir Quacksalot", 3));
farm.addDuck(new Duck("Duck Norris", 1));

// Why won't they lay eggs??
farm.feedDucks(100);
console.log("Eggs collected:", farm.collectEggs());  // Always 0

// Production keeps failing!
console.log("Ducks in coop:", farm.sendDucksToCoop());

// Check the infrastructure
console.log("Pipeline status:", farm.checkWaterPipeline());
