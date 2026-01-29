// ============================================
// DEMO BUGS FOR RUBBER DUCK TESTING
// Each function has a classic bug that's easy
// to "discover" through articulation
// ============================================

// BUG 1: The Classic Async/Await Miss
// "It just returns undefined!"
async function fetchUserData(userId) {
  const response = fetch(`/api/users/${userId}`);  // missing await
  const data = response.json();  // also missing await
  return data;
}

// BUG 2: Off-By-One Error
// "It's skipping the last item!"
function processAllItems(items) {
  const results = [];
  for (let i = 0; i < items.length - 1; i++) {  // should be items.length
    results.push(items[i].toUpperCase());
  }
  return results;
}

// BUG 3: Mutation Surprise
// "The original array keeps changing!"
function addDiscount(products) {
  const discounted = products;  // not a copy!
  discounted.forEach(p => p.price *= 0.9);
  return discounted;
}

// BUG 4: Truthiness Trap
// "It says the user doesn't exist but they do!"
function checkUserExists(user) {
  if (!user.id) {  // fails when id is 0
    return false;
  }
  return true;
}

// BUG 5: Closure in Loop
// "All the buttons log the same number!"
function setupButtons() {
  for (var i = 0; i < 5; i++) {  // var instead of let
    document.getElementById(`btn-${i}`).onclick = function() {
      console.log(i);  // always logs 5
    };
  }
}

// BUG 6: The Equality Gotcha
// "The comparison never works!"
function findUser(users, searchId) {
  return users.find(u => u.id == searchId);  // works, but...
}
// Called with: findUser(users, "5") when ids are numbers
// Or: findUser(users, 5) when ids are strings

// BUG 7: Promise.all Ordering Confusion
// "Sometimes the data is in the wrong order!"
async function fetchMultiple(ids) {
  const results = [];
  ids.forEach(async (id) => {  // forEach doesn't await
    const data = await fetch(`/api/${id}`);
    results.push(await data.json());
  });
  return results;  // returns before promises resolve
}

// BUG 8: The Accidental Global
// "The counter is way higher than it should be!"
function incrementCounter() {
  counter = counter + 1;  // forgot 'let', creates global
  return counter;
}

// BUG 9: Event Handler Memory Leak
// "The app gets slower over time!"
function ChatComponent() {
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // missing cleanup: return () => window.removeEventListener(...)
  }, []);
}

// BUG 10: The Null Check That Isn't
// "It crashes when there's no user!"
function getUsername(user) {
  return user && user.profile && user.profile.name || "Anonymous";
  // Actually fails: what if name is ""?
}
