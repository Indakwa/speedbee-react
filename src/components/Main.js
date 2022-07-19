import TopNav from "./TopNav";
import Timer from "./Timer";
import Screen from './Screen';

const Main = () => {
  var textArray = [
    'Thank you, Darling, thats just exactly what I needed, he said without even looking up, too busy shoveling the meals few delectable remnants into his drooling face; too insensitive and neglectful to provide the eye contact every great chef both craves and deserves. Youre welcome, she replied, mentally debating antidotes',
    'After a year of retirement spent plopped on the couch bingeing on-demand TV and enjoying the freedom from corporate deadlines that filled sleepless nights with worry, I am thinking I better start setting my own deadlines and get my butt moving or else the inevitable deadline will arrive sooner than later', 
    'The picnic was everything they had hoped for. The table, beautifully set, sparkled in the afternoon sun. Heavenly aromas wafted on the summer breeze.They anxiously gathered around in anticipation of the upcoming feast.Betty brought potato salad.Bill made his famous meatloaf.Sadly for them, Mildred brought a fly swatter.',
    'I once dated a man who never smelled. No sour morning breath, no corn-chip feet, no pungent sweat. My nose,less trusting than my heart,sniffed for signs of humanity. But even his gas did not provide a whiff. Farts of a hollow man, all sound and fury, signifying nothing',
    'As the group approached the house, it was clearly uninhabited.The windows were dusty, cobwebs hung in every corner. We gonna do this or what? Jake asked the group. No one spoke.Creeping around back, even before gaining entry, they felt the presence.Emily said, Im out! Everyone else died',
    'Majestic waterfalls, cascading and splashing; deep rivers, surging and flowing; mountain streams, sparkling and burbling; heavy rain, falling and sweeping; powerful surf, cresting and churning; all Gods work, in which we rejoice, but all things Maxwell tried not to think about as he willed his excruciating bus ride to end.',
    'He was doing headstands on the beach when a radio blared: Income inequality at all-time high!Sinking, he allowed the sand to reach his ears.Violence, poverty, global warming! “Oh, enough already,” he grumbled.Down went his head, nice and snug, until the radio was muted.Then the sea rose',
    'Dough. I needed dough that day.Ray would loan it for a price.Me? I took the loan. "Oy vey-"father said,"such bad advice!" Soul? I sold mine on that day,lamenting the price Id pay.Teams of hitmen bat away til I pay them back their dough.',
    'On the way to the crematorium a large beer truck inserts itself between the hearse and the cortege, then, despite signals to overtake, tenaciously holds its position. In the moments of sad gladness, down the line of following cars, the laughter ripples. “Harry would have appreciated that,” they all agree.',
    'Jukebox plays The Eagles. I nurse Amaretto Sours. One drawn-out sip, another. I absorb dim lights, make up stories. I am a writer, pianist, actor. I join people in losing at pool, laugh over lost shots, forget bills, stacks of tests, and somnolent students. Laugh until dull stars lead me home',
    'The flying saucer spiraled out of control. Hit a radio tower before ricocheting off a mountain spur. The dizzy aliens thought they were on their home planet, where they were called Ezees. They tried to explain this to paramedics, but were forever known as E.T.s. The acronym is a lie',
    "The old man sat outside, whiskey in hand. Thoughts drifting to memories. That time, those stories, that other time, those other stories. He smiles. Memories of when whiskey was not trendy. Memories of a time when memories were only told through memories. His smile widens. Ah yes, memories of memories.",
    'The octopus sat limp on the floor. Tentacles splayed across tiles. Martin looked at it, then, with a shrug of his shoulders, reached down, grabbed the octopus by its squishy head and tossed it back into the fish tank. He shook his head in bewilderment. Every damn day, he muttered',
    'DECEASED: Ted Mickel, age 45. He leaves behind a loving wife, Molly. Ted served his family and country with conviction. He was an exemplary officer for the Orange county police department, who should not have eaten such a huge bite of prime rib without teaching his wife the Heimlich maneuver.',
    'The kids gathered in a circle. The oldest was six. One by one, they each took turns. When everyone had finished their juice, they lay down, closed their eyes and waited for the spaceship to come take them to heaven. That was when Gina peed her pants, and ruined everything',
    'Johnny traded his records for cassettes, then traded his cassettes for CDs, then traded his CDs for Mp3s. When his apartment flooded, his computer crashed and his old collections were ruined. He decided the only thing left to do was sing, play guitar, and make some music of his own.',
    'Riley smoked behind Walgreens. She named the local cat Miggles. She gave cigarettes to the bum near the dumpster. He had liquor breath; asked for food money. She never gave him any; he was a drunk. She had not seen Miggles in awhile. The bum had stopped asking for food.',
    "My tummy is growing. I have not eaten all day. There is food around the house, but I will not eat it. My body is but a vessel. My mind is strong. I am doing this to show that I have discipline, that I have faith. I feel kinda dizzy.",
    'I believe that proper grammar and prose do not represent the only way to produce good writing. I believe that most readers do not know as much as we presume they know.I am firm in my beliefs.I am also a bitch who gets defensive when he is criticized',
    'Golden-brown, and round. A crispy cylinder. Crunchy outside hiding bits of soft starchy goodness within. Can be dipped in ketchup, mayonnaise. Warm smelling. Piping hot inside. IF THEY DROP TO THE GROUND: DO NOT EAT THEM! You may get dirt in your mouth; they will not taste the same',
    'Florescent lights and a humid breeze. Couples intertwined on sidewalks, against buildings, along a wall. High skirts, high bums, high hopes. An eddy of tourists and locals. Promoters, panhandlers. Taxis, bikes, the occasional muscle car. The smell of food, sweat and exhaust fumes. Blaring music. Fashion, flirting. Meandering masses.',
    'The vending machine stuck. Fritos hung dangling from the coil. Shake, shake. The dollar insert slot was taped over. She was out of change, save for two nickels. Shake, shake. Shake, shake, shakeshakeshakeshake! A coworker walked by and slammed her face, nose first, into the machine. Blood gushed. Fritos fell.',
    'This is by far the simplest text to type. Yeah, the simplest. No quotations, no crazy hyphens and abbreviations. It is just plain text with a few random numerals like 65, 90 and 1. I cannot help it, I must throw one or two pangrams here. Wait, do you know what a pangram is? It is a sentence that has all alphabets like The five boxing wizards jump quickly.',
        ];

  let text = textArray[Math.floor(Math.random()*textArray.length)];   


 

  return (
    <section className="main">  
      <TopNav />
      <div className="container">
        <Screen text={text}/>
        <Timer />
      </div>
    </section>
  )
}

export default Main