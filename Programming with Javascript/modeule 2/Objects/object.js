var StoreManagerMovement = 4;
var StoreManagerSocialSkills = 50;
var StoreManagerStreetSmarts = 50;
var StoreManagerHealth = 30;

// First type of Declaring Object.

var StoreManager = {}
StoreManager.Movement = 4;
StoreManager.SocialSkills = 50;
StoreManager.StreetSmarts = 50;
StoreManager.Health = 30;



// Second type of making object

var AssistantManager = {
    Movement: 4,
    SocialSkills: 30,
    StreetSmarts: 30,
    Health: 40

}


// Adding object property using dot notation
StoreManager.next_acheivement = "Open A new Store"
AssistantManager.next_acheivement = "Get Promoted"