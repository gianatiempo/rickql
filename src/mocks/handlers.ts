import { graphql, GraphQLHandler } from 'msw'
import {
  CharacterInfoQuery,
  CharacterInfoQueryVariables,
  CharactersQuery,
  CharactersQueryVariables,
} from '../gql/graphql'

const page1 = [
  { image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', name: 'Rick Sanchez', status: 'Alive', id: '1' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', name: 'Morty Smith', status: 'Alive', id: '2' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', name: 'Summer Smith', status: 'Alive', id: '3' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', name: 'Beth Smith', status: 'Alive', id: '4' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', name: 'Jerry Smith', status: 'Alive', id: '5' },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    id: '6',
  },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    name: 'Abradolf Lincler',
    status: 'unknown',
    id: '7',
  },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    name: 'Adjudicator Rick',
    status: 'Dead',
    id: '8',
  },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
    name: 'Agency Director',
    status: 'Dead',
    id: '9',
  },
  { image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg', name: 'Alan Rails', status: 'Dead', id: '10' },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
    name: 'Albert Einstein',
    status: 'Dead',
    id: '11',
  },
  { image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg', name: 'Alexander', status: 'Dead', id: '12' },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    name: 'Alien Googah',
    status: 'unknown',
    id: '13',
  },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
    name: 'Alien Morty',
    status: 'unknown',
    id: '14',
  },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    name: 'Alien Rick',
    status: 'unknown',
    id: '15',
  },
  { image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg', name: 'Amish Cyborg', status: 'Dead', id: '16' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg', name: 'Annie', status: 'Alive', id: '17' },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
    name: 'Antenna Morty',
    status: 'Alive',
    id: '18',
  },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    name: 'Antenna Rick',
    status: 'unknown',
    id: '19',
  },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    name: 'Ants in my Eyes Johnson',
    status: 'unknown',
    id: '20',
  },
]

const page2 = [
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
    name: 'Aqua Morty',
    status: 'unknown',
    id: '21',
  },
  { image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg', name: 'Aqua Rick', status: 'unknown', id: '22' },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/23.jpeg',
    name: 'Arcade Alien',
    status: 'unknown',
    id: '23',
  },
  { image: 'https://rickandmortyapi.com/api/character/avatar/24.jpeg', name: 'Armagheadon', status: 'Alive', id: '24' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/25.jpeg', name: 'Armothy', status: 'Dead', id: '25' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/26.jpeg', name: 'Arthricia', status: 'Alive', id: '26' },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/27.jpeg',
    name: 'Artist Morty',
    status: 'Alive',
    id: '27',
  },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/28.jpeg',
    name: 'Attila Starwar',
    status: 'Alive',
    id: '28',
  },
  { image: 'https://rickandmortyapi.com/api/character/avatar/29.jpeg', name: 'Baby Legs', status: 'Alive', id: '29' },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/30.jpeg',
    name: 'Baby Poopybutthole',
    status: 'Alive',
    id: '30',
  },
  { image: 'https://rickandmortyapi.com/api/character/avatar/31.jpeg', name: 'Baby Wizard', status: 'Dead', id: '31' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/32.jpeg', name: 'Bearded Lady', status: 'Dead', id: '32' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/33.jpeg', name: 'Beebo', status: 'Dead', id: '33' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/34.jpeg', name: 'Benjamin', status: 'Alive', id: '34' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/35.jpeg', name: 'Bepisian', status: 'Alive', id: '35' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/36.jpeg', name: 'Beta-Seven', status: 'Alive', id: '36' },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/37.jpeg',
    name: 'Beth Sanchez',
    status: 'Alive',
    id: '37',
  },
  { image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg', name: 'Beth Smith', status: 'Alive', id: '38' },
  { image: 'https://rickandmortyapi.com/api/character/avatar/39.jpeg', name: 'Beth Smith', status: 'Alive', id: '39' },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/40.jpeg',
    name: "Beth's Mytholog",
    status: 'Dead',
    id: '40',
  },
]

const handlers: GraphQLHandler[] = [
  graphql.query<CharactersQuery, CharactersQueryVariables>('Characters', (req, res, ctx) => {
    const { page } = req.variables

    return res(
      ctx.data({
        characters: {
          results: page === 1 ? page1 : page2,
          info: {
            count: 826,
            next: Number(page) === 1 ? 2 : 3,
            prev: Number(page) === 1 ? null : 1,
          },
        },
      }),
    )
  }),
  graphql.query<CharacterInfoQuery, CharacterInfoQueryVariables>('CharacterInfo', (req, res, ctx) => {
    return res(
      ctx.data({
        character: {
          episode: [
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Bepisian',
                  id: '35',
                  type: 'Bepisian',
                },
                {
                  name: 'Beth Smith',
                  id: '38',
                  type: '',
                },
                {
                  name: 'Canklanker Thom',
                  id: '62',
                  type: 'Gromflomite',
                },
                {
                  name: 'Davin',
                  id: '92',
                  type: '',
                },
                {
                  name: 'Frank Palicky',
                  id: '127',
                  type: '',
                },
                {
                  name: 'Glenn',
                  id: '144',
                  type: 'Gromflomite',
                },
                {
                  name: 'Hookah Alien',
                  id: '158',
                  type: 'Tuskfish',
                },
                {
                  name: 'Jerry Smith',
                  id: '175',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '179',
                  type: '',
                },
                {
                  name: "Jessica's Friend",
                  id: '181',
                  type: '',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '239',
                  type: '',
                },
                {
                  name: 'Mrs. Sanchez',
                  id: '249',
                  type: '',
                },
                {
                  name: 'Principal Vagina',
                  id: '271',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '338',
                  type: '',
                },
                {
                  name: 'Davin',
                  id: '394',
                  type: '',
                },
                {
                  name: 'Greebybobe',
                  id: '395',
                  type: 'Greebybobe',
                },
                {
                  name: 'Pripudlian',
                  id: '435',
                  type: 'Pripudlian',
                },
              ],
              name: 'Pilot',
              air_date: 'December 2, 2013',
              id: '1',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '38',
                  type: '',
                },
                {
                  name: 'Bill',
                  id: '46',
                  type: 'Dog',
                },
                {
                  name: 'Centaur',
                  id: '63',
                  type: 'Centaur',
                },
                {
                  name: 'Creepy Little Girl',
                  id: '80',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '175',
                  type: '',
                },
                {
                  name: 'Melissa',
                  id: '221',
                  type: 'Monster',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '239',
                  type: '',
                },
                {
                  name: 'Mrs. Pancakes',
                  id: '246',
                  type: '',
                },
                {
                  name: 'Scary Brandon',
                  id: '304',
                  type: 'Monster',
                },
                {
                  name: 'Scary Glenn',
                  id: '305',
                  type: 'Monster',
                },
                {
                  name: 'Scary Terry',
                  id: '306',
                  type: 'Monster',
                },
                {
                  name: 'Snuffles (Snowball)',
                  id: '329',
                  type: 'Dog',
                },
                {
                  name: 'Summer Smith',
                  id: '338',
                  type: '',
                },
                {
                  name: 'Scary Teacher',
                  id: '396',
                  type: 'Monster',
                },
                {
                  name: 'Fido',
                  id: '397',
                  type: 'Dog',
                },
                {
                  name: 'Accountant dog',
                  id: '398',
                  type: 'Dog',
                },
                {
                  name: 'Trunkphobic suspenders guy',
                  id: '405',
                  type: '',
                },
              ],
              name: 'Lawnmower Dog',
              air_date: 'December 9, 2013',
              id: '2',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Alexander',
                  id: '12',
                  type: '',
                },
                {
                  name: 'Annie',
                  id: '17',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '38',
                  type: '',
                },
                {
                  name: 'Bill',
                  id: '45',
                  type: '',
                },
                {
                  name: 'Tuberculosis',
                  id: '96',
                  type: '',
                },
                {
                  name: 'Gonorrhea',
                  id: '97',
                  type: '',
                },
                {
                  name: 'Hepatitis A',
                  id: '98',
                  type: '',
                },
                {
                  name: 'Hepatitis C',
                  id: '99',
                  type: '',
                },
                {
                  name: 'Bubonic Plague',
                  id: '100',
                  type: '',
                },
                {
                  name: 'E. Coli',
                  id: '101',
                  type: '',
                },
                {
                  name: 'Dr. Xenon Bloom',
                  id: '108',
                  type: 'Amoeba-Person',
                },
                {
                  name: 'Eric McMan',
                  id: '112',
                  type: '',
                },
                {
                  name: 'Ethan',
                  id: '114',
                  type: 'Cronenberg',
                },
                {
                  name: 'Jacob',
                  id: '169',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '175',
                  type: '',
                },
                {
                  name: 'Joyce Smith',
                  id: '186',
                  type: '',
                },
                {
                  name: 'Leonard Smith',
                  id: '201',
                  type: '',
                },
                {
                  name: 'Poncho',
                  id: '268',
                  type: '',
                },
                {
                  name: 'Roger',
                  id: '300',
                  type: '',
                },
                {
                  name: 'Ruben',
                  id: '302',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '338',
                  type: '',
                },
                {
                  name: 'Tom Randolph',
                  id: '356',
                  type: '',
                },
              ],
              name: 'Anatomy Park',
              air_date: 'December 16, 2013',
              id: '3',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '38',
                  type: '',
                },
                {
                  name: 'Cynthia',
                  id: '87',
                  type: 'Zigerion',
                },
                {
                  name: 'Jerry Smith',
                  id: '175',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '179',
                  type: '',
                },
                {
                  name: "Jessica's Friend",
                  id: '181',
                  type: '',
                },
                {
                  name: 'Kevin',
                  id: '191',
                  type: 'Zigerion',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '239',
                  type: '',
                },
                {
                  name: 'Mr. Marklovitz',
                  id: '241',
                  type: '',
                },
                {
                  name: 'Prince Nebulon',
                  id: '270',
                  type: 'Zigerion',
                },
                {
                  name: 'Stu',
                  id: '337',
                  type: 'Zigerion',
                },
                {
                  name: 'Summer Smith',
                  id: '338',
                  type: '',
                },
              ],
              name: 'M. Night Shaym-Aliens!',
              air_date: 'January 13, 2014',
              id: '4',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '38',
                  type: '',
                },
                {
                  name: 'Big Boobed Waitress',
                  id: '41',
                  type: '',
                },
                {
                  name: 'Dale',
                  id: '89',
                  type: 'Giant',
                },
                {
                  name: 'Evil Beth Clone',
                  id: '116',
                  type: 'Clone',
                },
                {
                  name: 'Evil Jerry Clone',
                  id: '117',
                  type: 'Clone',
                },
                {
                  name: 'Evil Summer Clone',
                  id: '120',
                  type: 'Clone',
                },
                {
                  name: 'Jerry Smith',
                  id: '175',
                  type: '',
                },
                {
                  name: 'King Jellybean',
                  id: '193',
                  type: 'Jellybean',
                },
                {
                  name: 'Mr. Booby Buyer',
                  id: '238',
                  type: 'Boobie buyer reptilian',
                },
                {
                  name: 'Mr. Meeseeks',
                  id: '242',
                  type: 'Meeseeks',
                },
                {
                  name: 'Principal Vagina',
                  id: '271',
                  type: '',
                },
                {
                  name: 'Samantha',
                  id: '303',
                  type: '',
                },
                {
                  name: 'Slippery Stair',
                  id: '326',
                  type: 'Slug',
                },
                {
                  name: 'Stair Goblin',
                  id: '333',
                  type: 'Stair goblin',
                },
                {
                  name: 'Summer Smith',
                  id: '338',
                  type: '',
                },
                {
                  name: 'Tammy Guetermann',
                  id: '343',
                  type: '',
                },
                {
                  name: 'Tiny-persons advocacy group lawyer',
                  id: '399',
                  type: 'Giant',
                },
                {
                  name: 'Giant Judge',
                  id: '400',
                  type: 'Giant',
                },
              ],
              name: 'Meeseeks and Destroy',
              air_date: 'January 20, 2014',
              id: '5',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '38',
                  type: '',
                },
                {
                  name: 'Brad',
                  id: '58',
                  type: '',
                },
                {
                  name: 'Cronenberg Rick',
                  id: '82',
                  type: '',
                },
                {
                  name: 'Cronenberg Morty',
                  id: '83',
                  type: '',
                },
                {
                  name: 'Davin',
                  id: '92',
                  type: '',
                },
                {
                  name: 'Harold',
                  id: '155',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '175',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '179',
                  type: '',
                },
                {
                  name: "Jessica's Friend",
                  id: '181',
                  type: '',
                },
                {
                  name: 'MC Haps',
                  id: '216',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '234',
                  type: '',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '239',
                  type: '',
                },
                {
                  name: 'Mrs. Sanchez',
                  id: '249',
                  type: '',
                },
                {
                  name: 'Nancy',
                  id: '251',
                  type: '',
                },
                {
                  name: 'Principal Vagina',
                  id: '271',
                  type: '',
                },
                {
                  name: 'Rick Sanchez',
                  id: '293',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '338',
                  type: '',
                },
                {
                  name: 'Tammy Guetermann',
                  id: '343',
                  type: '',
                },
                {
                  name: 'Davin',
                  id: '394',
                  type: '',
                },
              ],
              name: 'Rick Potion #9',
              air_date: 'January 27, 2014',
              id: '6',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Brad Anderson',
                  id: '59',
                  type: '',
                },
                {
                  name: 'Gwendolyn',
                  id: '151',
                  type: 'Gazorpian reproduction robot',
                },
                {
                  name: 'Jackie',
                  id: '168',
                  type: 'Gazorpian',
                },
                {
                  name: 'Ma-Sha',
                  id: '211',
                  type: 'Gazorpian',
                },
                {
                  name: 'Morty Jr.',
                  id: '230',
                  type: 'Human Gazorpian',
                },
                {
                  name: 'Pawnshop Clerk',
                  id: '258',
                  type: '',
                },
                {
                  name: 'Snuffles (Snowball)',
                  id: '329',
                  type: 'Dog',
                },
                {
                  name: 'Veronica Ann Bennet',
                  id: '376',
                  type: 'Gazorpian',
                },
                {
                  name: "Morty Jr's interviewer",
                  id: '401',
                  type: '',
                },
              ],
              name: 'Raising Gazorpazorp',
              air_date: 'March 10, 2014',
              id: '7',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Ants in my Eyes Johnson',
                  id: '20',
                  type: 'Human with ants in his eyes',
                },
                {
                  name: 'Attila Starwar',
                  id: '28',
                  type: '',
                },
                {
                  name: 'Baby Legs',
                  id: '29',
                  type: 'Human with baby legs',
                },
                {
                  name: 'Benjamin',
                  id: '34',
                  type: '',
                },
                {
                  name: 'Beth Sanchez',
                  id: '37',
                  type: '',
                },
                {
                  name: 'Bobby Moynihan',
                  id: '54',
                  type: '',
                },
                {
                  name: 'Cynthia',
                  id: '88',
                  type: '',
                },
                {
                  name: 'David Letterman',
                  id: '91',
                  type: '',
                },
                {
                  name: 'Fulgora',
                  id: '129',
                  type: '',
                },
                {
                  name: 'Garmanarnar',
                  id: '134',
                  type: '',
                },
                {
                  name: 'Gazorpazorpfield',
                  id: '136',
                  type: 'Gazorpian',
                },
                {
                  name: 'Glenn',
                  id: '145',
                  type: 'Eat shiter-Person',
                },
                {
                  name: 'Hamster In Butt',
                  id: '153',
                  type: '',
                },
                {
                  name: 'Hole in the Wall Where the Men Can See it All',
                  id: '157',
                  type: 'Hole',
                },
                {
                  name: 'Celebrity Jerry',
                  id: '176',
                  type: '',
                },
                {
                  name: 'Johnny Depp',
                  id: '183',
                  type: '',
                },
                {
                  name: 'Jon',
                  id: '184',
                  type: 'Gazorpian',
                },
                {
                  name: 'Kristen Stewart',
                  id: '195',
                  type: '',
                },
                {
                  name: 'Loggins',
                  id: '207',
                  type: 'Alligator-Person',
                },
                {
                  name: 'Man Painted Silver Who Makes Robot Noises',
                  id: '214',
                  type: '',
                },
                {
                  name: 'Michael Denny and the Denny Singers',
                  id: '222',
                  type: '',
                },
                {
                  name: 'Mrs. Sullivan',
                  id: '250',
                  type: 'Cat controlled dead lady',
                },
                {
                  name: 'Piece of Toast',
                  id: '266',
                  type: 'Bread',
                },
                {
                  name: 'Real Fake Doors Salesman',
                  id: '277',
                  type: '',
                },
                {
                  name: 'Regular Legs',
                  id: '279',
                  type: '',
                },
                {
                  name: 'Shmlamantha Shmlicelli',
                  id: '314',
                  type: '',
                },
                {
                  name: 'Shmlangela Shmlobinson-Shmlower',
                  id: '315',
                  type: '',
                },
                {
                  name: 'Shmlona Shmlobinson',
                  id: '316',
                  type: '',
                },
                {
                  name: 'Shmlonathan Shmlower',
                  id: '317',
                  type: '',
                },
                {
                  name: 'Shmlony Shmlicelli',
                  id: '318',
                  type: '',
                },
                {
                  name: 'Three Unknown Things',
                  id: '351',
                  type: '',
                },
                {
                  name: 'Tophat Jones',
                  id: '358',
                  type: 'Leprechaun',
                },
                {
                  name: 'Trunk Man',
                  id: '367',
                  type: 'Trunk-Person',
                },
                {
                  name: 'Two Guys with Handlebar Mustaches',
                  id: '370',
                  type: '',
                },
                {
                  name: 'Unmuscular Michael',
                  id: '373',
                  type: '',
                },
                {
                  name: 'Guy from The Bachelor',
                  id: '402',
                  type: '',
                },
                {
                  name: 'Corn detective',
                  id: '403',
                  type: 'Corn-person',
                },
                {
                  name: 'Michael Jackson',
                  id: '404',
                  type: 'Phone-Person',
                },
                {
                  name: 'Trunkphobic suspenders guy',
                  id: '405',
                  type: '',
                },
                {
                  name: 'Spiderweb teddy bear',
                  id: '406',
                  type: 'Teddy Bear',
                },
                {
                  name: 'Regular Tyrion Lannister',
                  id: '407',
                  type: '',
                },
                {
                  name: 'Quick Mystery Presenter',
                  id: '408',
                  type: '',
                },
                {
                  name: 'Mr. Sneezy',
                  id: '409',
                  type: 'Little Human',
                },
                {
                  name: 'Two Brothers',
                  id: '410',
                  type: '',
                },
                {
                  name: 'Alien Mexican Armada',
                  id: '411',
                  type: 'Mexican',
                },
                {
                  name: 'Giant Cat Monster',
                  id: '412',
                  type: 'Giant Cat Monster',
                },
                {
                  name: 'Old Women',
                  id: '413',
                  type: 'Old Amazons',
                },
                {
                  name: 'Trunkphobic guy',
                  id: '414',
                  type: '',
                },
                {
                  name: 'Pro trunk people marriage guy',
                  id: '415',
                  type: '',
                },
                {
                  name: 'Muscular Mannie',
                  id: '416',
                  type: 'Mannie',
                },
                {
                  name: 'Baby Legs Chief',
                  id: '417',
                  type: '',
                },
                {
                  name: "Mrs. Sullivan's Boyfriend",
                  id: '418',
                  type: 'Necrophiliac',
                },
              ],
              name: 'Rixty Minutes',
              air_date: 'March 17, 2014',
              id: '8',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Cynthia',
                  id: '88',
                  type: '',
                },
                {
                  name: 'King Flippy Nips',
                  id: '192',
                  type: 'Plutonian',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '240',
                  type: '',
                },
                {
                  name: 'Mr. Needful',
                  id: '243',
                  type: 'The Devil',
                },
                {
                  name: 'Nancy',
                  id: '251',
                  type: '',
                },
                {
                  name: 'Principal Vagina',
                  id: '272',
                  type: '',
                },
                {
                  name: 'Scroopy Noopers',
                  id: '307',
                  type: 'Plutonian',
                },
                {
                  name: 'Plutonian Hostess',
                  id: '419',
                  type: 'Plutonian',
                },
                {
                  name: 'Plutonian Host',
                  id: '420',
                  type: 'Plutonian',
                },
                {
                  name: 'Rich Plutonian',
                  id: '421',
                  type: 'Plutonian',
                },
                {
                  name: 'Rich Plutonian',
                  id: '422',
                  type: 'Plutonian',
                },
                {
                  name: 'Butter Robot',
                  id: '826',
                  type: 'Passing Butter Robot',
                },
              ],
              name: 'Something Ricked This Way Comes',
              air_date: 'March 24, 2014',
              id: '9',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Abradolf Lincler',
                  id: '7',
                  type: 'Genetic experiment',
                },
                {
                  name: 'Alien Morty',
                  id: '14',
                  type: '',
                },
                {
                  name: 'Alien Rick',
                  id: '15',
                  type: '',
                },
                {
                  name: 'Antenna Morty',
                  id: '18',
                  type: 'Human with antennae',
                },
                {
                  name: 'Antenna Rick',
                  id: '19',
                  type: 'Human with antennae',
                },
                {
                  name: 'Aqua Morty',
                  id: '21',
                  type: 'Fish-Person',
                },
                {
                  name: 'Aqua Rick',
                  id: '22',
                  type: 'Fish-Person',
                },
                {
                  name: 'Artist Morty',
                  id: '27',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '39',
                  type: '',
                },
                {
                  name: 'Blue Shirt Morty',
                  id: '53',
                  type: '',
                },
                {
                  name: 'Cowboy Morty',
                  id: '77',
                  type: '',
                },
                {
                  name: 'Cowboy Rick',
                  id: '78',
                  type: '',
                },
                {
                  name: 'Crab Spider',
                  id: '79',
                  type: 'Animal',
                },
                {
                  name: 'Cronenberg Rick',
                  id: '82',
                  type: '',
                },
                {
                  name: 'Cronenberg Morty',
                  id: '83',
                  type: '',
                },
                {
                  name: 'Cult Leader Morty',
                  id: '84',
                  type: '',
                },
                {
                  name: 'Cyclops Morty',
                  id: '85',
                  type: '',
                },
                {
                  name: 'Cyclops Rick',
                  id: '86',
                  type: '',
                },
                {
                  name: 'Doofus Rick',
                  id: '103',
                  type: '',
                },
                {
                  name: 'Eric Stoltz Mask Morty',
                  id: '113',
                  type: '',
                },
                {
                  name: 'Evil Morty',
                  id: '118',
                  type: '',
                },
                {
                  name: 'Evil Rick',
                  id: '119',
                  type: 'Robot',
                },
                {
                  name: 'Hammerhead Morty',
                  id: '152',
                  type: 'Hammerhead-Person',
                },
                {
                  name: 'Insurance Rick',
                  id: '164',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '177',
                  type: '',
                },
                {
                  name: 'Long Sleeved Morty',
                  id: '209',
                  type: '',
                },
                {
                  name: 'Maximums Rickimus',
                  id: '215',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '232',
                  type: '',
                },
                {
                  name: 'Mr. Meeseeks',
                  id: '242',
                  type: 'Meeseeks',
                },
                {
                  name: 'Quantum Rick',
                  id: '274',
                  type: '',
                },
                {
                  name: 'Rick Sanchez',
                  id: '290',
                  type: '',
                },
                {
                  name: 'Ricktiminus Sancheziminius',
                  id: '294',
                  type: '',
                },
                {
                  name: 'Riq IV',
                  id: '295',
                  type: '',
                },
                {
                  name: 'Robot Morty',
                  id: '298',
                  type: '',
                },
                {
                  name: 'Robot Rick',
                  id: '299',
                  type: '',
                },
                {
                  name: 'Snuffles (Snowball)',
                  id: '329',
                  type: 'Dog',
                },
                {
                  name: 'Solicitor Rick',
                  id: '330',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '339',
                  type: '',
                },
                {
                  name: 'The Scientist Formerly Known as Rick',
                  id: '349',
                  type: '',
                },
                {
                  name: 'Tortured Morty',
                  id: '359',
                  type: '',
                },
                {
                  name: 'Woman Rick',
                  id: '381',
                  type: 'Chair',
                },
                {
                  name: 'Zeta Alpha Rick',
                  id: '389',
                  type: '',
                },
                {
                  name: 'Trunkphobic suspenders guy',
                  id: '405',
                  type: '',
                },
                {
                  name: 'Pizza-person',
                  id: '424',
                  type: 'Pizza',
                },
                {
                  name: 'Pizza-person',
                  id: '425',
                  type: 'Pizza',
                },
                {
                  name: 'Greasy Grandma',
                  id: '426',
                  type: 'Grandma',
                },
                {
                  name: 'Phone-person',
                  id: '427',
                  type: 'Phone',
                },
                {
                  name: 'Phone-person',
                  id: '428',
                  type: 'Phone',
                },
                {
                  name: 'Chair-person',
                  id: '429',
                  type: 'Chair',
                },
                {
                  name: 'Chair-person',
                  id: '430',
                  type: 'Chair',
                },
                {
                  name: 'Chair-homeless',
                  id: '431',
                  type: 'Chair',
                },
                {
                  name: 'Chair-waiter',
                  id: '432',
                  type: 'Chair',
                },
                {
                  name: 'Doopidoo',
                  id: '433',
                  type: 'Doopidoo',
                },
                {
                  name: 'Super Weird Rick',
                  id: '434',
                  type: '',
                },
                {
                  name: 'Reggie',
                  id: '663',
                  type: 'Zeus',
                },
              ],
              name: 'Close Rick-counters of the Rick Kind',
              air_date: 'April 7, 2014',
              id: '10',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Abradolf Lincler',
                  id: '7',
                  type: 'Genetic experiment',
                },
                {
                  name: 'Bepisian',
                  id: '35',
                  type: 'Bepisian',
                },
                {
                  name: 'Birdperson',
                  id: '47',
                  type: 'Bird-Person',
                },
                {
                  name: 'Brad',
                  id: '58',
                  type: '',
                },
                {
                  name: 'Cynthia',
                  id: '88',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: "Jessica's Friend",
                  id: '181',
                  type: '',
                },
                {
                  name: 'Lucy',
                  id: '210',
                  type: '',
                },
                {
                  name: 'MC Haps',
                  id: '216',
                  type: '',
                },
                {
                  name: 'Nancy',
                  id: '251',
                  type: '',
                },
                {
                  name: 'Revolio Clockberg Jr.',
                  id: '282',
                  type: 'Gear-Person',
                },
                {
                  name: 'Riq IV',
                  id: '295',
                  type: '',
                },
                {
                  name: 'Scropon',
                  id: '308',
                  type: 'Lobster-Alien',
                },
                {
                  name: 'Slippery Stair',
                  id: '326',
                  type: 'Slug',
                },
                {
                  name: 'Slow Mobius',
                  id: '327',
                  type: '',
                },
                {
                  name: 'Squanchy',
                  id: '331',
                  type: 'Cat-Person',
                },
                {
                  name: 'Stair Goblin',
                  id: '333',
                  type: 'Stair goblin',
                },
                {
                  name: 'Tammy Guetermann',
                  id: '344',
                  type: '',
                },
                {
                  name: 'Traflorkian',
                  id: '362',
                  type: 'Traflorkian',
                },
                {
                  name: 'Zeta Alpha Rick',
                  id: '389',
                  type: '',
                },
                {
                  name: 'Greebybobe',
                  id: '395',
                  type: 'Greebybobe',
                },
                {
                  name: 'Trunkphobic suspenders guy',
                  id: '405',
                  type: '',
                },
                {
                  name: 'Synthetic Laser Eels',
                  id: '423',
                  type: 'Eel',
                },
                {
                  name: 'Pripudlian',
                  id: '435',
                  type: 'Pripudlian',
                },
                {
                  name: 'Giant Testicle Monster',
                  id: '436',
                  type: '',
                },
              ],
              name: 'Ricksy Business',
              air_date: 'April 14, 2014',
              id: '11',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Albert Einstein',
                  id: '11',
                  type: '',
                },
                {
                  name: 'Chris',
                  id: '64',
                  type: 'Organic gun',
                },
                {
                  name: 'Mr. Benson',
                  id: '237',
                  type: '',
                },
                {
                  name: 'Shleemypants',
                  id: '313',
                  type: 'Omniscient being',
                },
                {
                  name: 'Michael',
                  id: '437',
                  type: '',
                },
                {
                  name: "Michael's Lawyer",
                  id: '438',
                  type: '',
                },
                {
                  name: 'Veterinary',
                  id: '439',
                  type: '',
                },
                {
                  name: 'Veterinary Nurse',
                  id: '440',
                  type: '',
                },
              ],
              name: 'A Rickle in Time',
              air_date: 'July 26, 2015',
              id: '12',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Arcade Alien',
                  id: '23',
                  type: '',
                },
                {
                  name: 'Attila Starwar',
                  id: '28',
                  type: '',
                },
                {
                  name: 'Benjamin',
                  id: '34',
                  type: '',
                },
                {
                  name: 'Dr. Schmidt',
                  id: '106',
                  type: 'Game',
                },
                {
                  name: 'Fart',
                  id: '122',
                  type: 'Interdimensional gaseous being',
                },
                {
                  name: 'Fulgora',
                  id: '129',
                  type: '',
                },
                {
                  name: 'Gar Gloonch',
                  id: '131',
                  type: 'Zombodian',
                },
                {
                  name: 'Garblovian',
                  id: '133',
                  type: 'Garblovian',
                },
                {
                  name: 'Gazorpazorpfield',
                  id: '136',
                  type: 'Gazorpian',
                },
                {
                  name: 'Jerry 5-126',
                  id: '174',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: 'Krombopulos Michael',
                  id: '196',
                  type: 'Gromflomite',
                },
                {
                  name: 'Loggins',
                  id: '207',
                  type: 'Alligator-Person',
                },
                {
                  name: 'Mr. Meeseeks',
                  id: '242',
                  type: 'Meeseeks',
                },
                {
                  name: 'Paul Fleishman',
                  id: '257',
                  type: '',
                },
                {
                  name: 'Revolio Clockberg Jr.',
                  id: '282',
                  type: 'Gear-Person',
                },
                {
                  name: 'Scrotian',
                  id: '309',
                  type: 'Scrotian',
                },
                {
                  name: 'Shimshamian',
                  id: '311',
                  type: 'Shimshamian',
                },
                {
                  name: 'Traflorkian',
                  id: '362',
                  type: 'Traflorkian',
                },
                {
                  name: 'Zarbadar Gloonch',
                  id: '386',
                  type: 'Drumbloxian',
                },
                {
                  name: 'Roy',
                  id: '393',
                  type: 'Game',
                },
                {
                  name: 'Giant Testicle Monster',
                  id: '436',
                  type: '',
                },
                {
                  name: 'Bearded Jerry',
                  id: '441',
                  type: '',
                },
                {
                  name: 'Shaved Head Jerry',
                  id: '442',
                  type: '',
                },
                {
                  name: 'Tank Top Jerry',
                  id: '443',
                  type: '',
                },
                {
                  name: 'Pink Polo Shirt Jerry',
                  id: '444',
                  type: '',
                },
                {
                  name: 'Jerryboree Keeper',
                  id: '445',
                  type: '',
                },
                {
                  name: 'Jerryboree Receptionist',
                  id: '446',
                  type: '',
                },
                {
                  name: 'Anchor Gear',
                  id: '447',
                  type: 'Gear-Person',
                },
                {
                  name: 'Gear Cop',
                  id: '448',
                  type: 'Gear-Person',
                },
                {
                  name: "Roy's Mum",
                  id: '449',
                  type: 'Game',
                },
                {
                  name: "Roy's Wife",
                  id: '450',
                  type: 'Game',
                },
                {
                  name: "Roy's Son",
                  id: '451',
                  type: 'Game',
                },
              ],
              name: 'Mortynight Run',
              air_date: 'August 2, 2015',
              id: '13',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Beta-Seven',
                  id: '36',
                  type: 'Hivemind',
                },
                {
                  name: 'Blim Blam',
                  id: '50',
                  type: 'Korblock',
                },
                {
                  name: 'Daron Jefferson',
                  id: '90',
                  type: 'Cone-nippled alien',
                },
                {
                  name: 'Karen Entity',
                  id: '188',
                  type: 'Unknown-nippled alien',
                },
                {
                  name: 'Mrs. Sanchez',
                  id: '249',
                  type: '',
                },
                {
                  name: 'Ron Benson',
                  id: '301',
                  type: 'Ring-nippled alien',
                },
                {
                  name: 'Steven Phillips',
                  id: '336',
                  type: 'Unknown-nippled alien',
                },
                {
                  name: 'Todd Crystal',
                  id: '355',
                  type: 'Unknown-nippled alien',
                },
                {
                  name: 'Unity',
                  id: '372',
                  type: 'Hivemind',
                },
              ],
              name: 'Auto Erotic Assimilation',
              air_date: 'August 9, 2015',
              id: '14',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Amish Cyborg',
                  id: '16',
                  type: 'Parasite',
                },
                {
                  name: 'Baby Wizard',
                  id: '31',
                  type: 'Parasite',
                },
                {
                  name: 'Bearded Lady',
                  id: '32',
                  type: 'Parasite',
                },
                {
                  name: 'Cousin Nicky',
                  id: '76',
                  type: 'Parasite',
                },
                {
                  name: 'Duck With Muscles',
                  id: '109',
                  type: 'Parasite',
                },
                {
                  name: "Frankenstein's Monster",
                  id: '128',
                  type: 'Parasite',
                },
                {
                  name: 'Ghost in a Jar',
                  id: '141',
                  type: 'Parasite',
                },
                {
                  name: 'Hamurai',
                  id: '154',
                  type: 'Parasite',
                },
                {
                  name: 'Jacob',
                  id: '169',
                  type: '',
                },
                {
                  name: 'Mr. Beauregard',
                  id: '236',
                  type: 'Parasite',
                },
                {
                  name: 'Mr. Poopybutthole',
                  id: '244',
                  type: '',
                },
                {
                  name: 'Mrs. Refrigerator',
                  id: '248',
                  type: 'Parasite',
                },
                {
                  name: 'Pencilvester',
                  id: '259',
                  type: 'Parasite',
                },
                {
                  name: 'Photography Raptor',
                  id: '262',
                  type: 'Parasite',
                },
                {
                  name: 'Reverse Giraffe',
                  id: '280',
                  type: 'Parasite',
                },
                {
                  name: 'Sleepy Gary',
                  id: '324',
                  type: 'Parasite',
                },
                {
                  name: 'Snuffles (Snowball)',
                  id: '329',
                  type: 'Dog',
                },
                {
                  name: 'Tinkles',
                  id: '352',
                  type: 'Parasite',
                },
                {
                  name: 'Uncle Steve',
                  id: '391',
                  type: 'Parasite',
                },
              ],
              name: 'Total Rickall',
              air_date: 'August 16, 2015',
              id: '15',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Armagheadon',
                  id: '24',
                  type: 'Cromulon',
                },
                {
                  name: 'Birdperson',
                  id: '47',
                  type: 'Bird-Person',
                },
                {
                  name: 'Ethan',
                  id: '115',
                  type: '',
                },
                {
                  name: 'Father Bob',
                  id: '124',
                  type: '',
                },
                {
                  name: 'General Nathan',
                  id: '138',
                  type: '',
                },
                {
                  name: 'Hydrogen-F',
                  id: '161',
                  type: 'Alphabetrian',
                },
                {
                  name: 'Ice-T',
                  id: '162',
                  type: 'Alphabetrian',
                },
                {
                  name: 'Jamey',
                  id: '172',
                  type: '',
                },
                {
                  name: 'Jim',
                  id: '182',
                  type: '',
                },
                {
                  name: 'Larva Alien',
                  id: '199',
                  type: 'Larva alien',
                },
                {
                  name: 'Magma-Q',
                  id: '212',
                  type: 'Alphabetrian',
                },
                {
                  name: 'Magnesium-J',
                  id: '213',
                  type: 'Alphabetrian',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '240',
                  type: '',
                },
                {
                  name: 'Mr. Marklovitz',
                  id: '241',
                  type: '',
                },
                {
                  name: 'Numbericon',
                  id: '253',
                  type: 'Numbericon',
                },
                {
                  name: 'Orthodox Jew',
                  id: '255',
                  type: '',
                },
                {
                  name: 'Principal Vagina',
                  id: '272',
                  type: '',
                },
                {
                  name: 'Scrotian',
                  id: '309',
                  type: 'Scrotian',
                },
                {
                  name: 'Snuffles (Snowball)',
                  id: '329',
                  type: 'Dog',
                },
                {
                  name: 'Squanchy',
                  id: '331',
                  type: 'Cat-Person',
                },
                {
                  name: 'Tammy Guetermann',
                  id: '344',
                  type: '',
                },
                {
                  name: 'Terry',
                  id: '346',
                  type: '',
                },
                {
                  name: 'President Curtis',
                  id: '347',
                  type: '',
                },
                {
                  name: 'Greebybobe',
                  id: '395',
                  type: 'Greebybobe',
                },
                {
                  name: 'Simon',
                  id: '452',
                  type: '',
                },
                {
                  name: 'Arbolian Mentirososian',
                  id: '454',
                  type: '',
                },
              ],
              name: 'Get Schwifty',
              air_date: 'August 23, 2015',
              id: '16',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Attila Starwar',
                  id: '28',
                  type: '',
                },
                {
                  name: 'Benjamin',
                  id: '34',
                  type: '',
                },
                {
                  name: 'Chris',
                  id: '65',
                  type: 'Microverse inhabitant',
                },
                {
                  name: 'Fulgora',
                  id: '129',
                  type: '',
                },
                {
                  name: 'Hunter',
                  id: '159',
                  type: 'Clone',
                },
                {
                  name: "Hunter's Father",
                  id: '160',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: "Jessica's Friend",
                  id: '181',
                  type: '',
                },
                {
                  name: 'Kyle',
                  id: '197',
                  type: 'Miniverse inhabitant',
                },
                {
                  name: 'Loggins',
                  id: '207',
                  type: 'Alligator-Person',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '240',
                  type: '',
                },
                {
                  name: 'Piece of Toast',
                  id: '266',
                  type: 'Bread',
                },
                {
                  name: 'The President of the Miniverse',
                  id: '348',
                  type: 'Miniverse inhabitant',
                },
                {
                  name: 'Tree Person',
                  id: '364',
                  type: 'Teenyverse inhabitant',
                },
                {
                  name: 'Zeep Xanflorp',
                  id: '388',
                  type: 'Microverse inhabitant',
                },
                {
                  name: 'Space Cruiser',
                  id: '753',
                  type: 'Artificial Intelligence',
                },
              ],
              name: 'The Ricks Must Be Crazy',
              air_date: 'August 30, 2015',
              id: '17',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: "Beth's Mytholog",
                  id: '40',
                  type: 'Mytholog',
                },
                {
                  name: 'Boobloosian',
                  id: '55',
                  type: 'Boobloosian',
                },
                {
                  name: 'Coach Feratu (Balik Alistane)',
                  id: '66',
                  type: 'Vampire',
                },
                {
                  name: 'Gar Gloonch',
                  id: '131',
                  type: 'Zombodian',
                },
                {
                  name: "Gar's Mytholog",
                  id: '132',
                  type: 'Mytholog',
                },
                {
                  name: 'Glexo Slim Slom',
                  id: '146',
                  type: '',
                },
                {
                  name: 'Goddess Beth',
                  id: '148',
                  type: 'Goddess',
                },
                {
                  name: 'Ideal Jerry',
                  id: '163',
                  type: 'Mytholog',
                },
                {
                  name: "Jerry's Mytholog",
                  id: '178',
                  type: 'Mytholog',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: "Jessica's Friend",
                  id: '181',
                  type: '',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '240',
                  type: '',
                },
                {
                  name: 'Principal Vagina',
                  id: '272',
                  type: '',
                },
                {
                  name: 'Self-Congratulatory Jerry',
                  id: '310',
                  type: 'Mytholog',
                },
                {
                  name: 'Tiny Rick',
                  id: '353',
                  type: 'Clone',
                },
                {
                  name: 'Toby Matthews',
                  id: '354',
                  type: '',
                },
                {
                  name: 'Tophat Jones',
                  id: '358',
                  type: 'Leprechaun',
                },
                {
                  name: 'Vampire Master',
                  id: '374',
                  type: 'Vampire',
                },
                {
                  name: 'Zarbadar Gloonch',
                  id: '386',
                  type: 'Drumbloxian',
                },
                {
                  name: "Zarbadar's Mytholog",
                  id: '387',
                  type: 'Mytholog',
                },
                {
                  name: "Vampire Master's Assistant",
                  id: '453',
                  type: 'Vampire',
                },
              ],
              name: 'Big Trouble in Little Sanchez',
              air_date: 'September 13, 2015',
              id: '18',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Arcade Alien',
                  id: '23',
                  type: '',
                },
                {
                  name: 'Bepisian',
                  id: '35',
                  type: 'Bepisian',
                },
                {
                  name: 'Blamph',
                  id: '49',
                  type: '',
                },
                {
                  name: 'Blue Diplomat',
                  id: '51',
                  type: '',
                },
                {
                  name: 'Dr. Glip-Glop',
                  id: '105',
                  type: '',
                },
                {
                  name: 'Eyehole Man',
                  id: '121',
                  type: '',
                },
                {
                  name: 'Fleeb',
                  id: '126',
                  type: '',
                },
                {
                  name: 'Garblovian',
                  id: '133',
                  type: 'Garblovian',
                },
                {
                  name: 'Hamster In Butt',
                  id: '153',
                  type: '',
                },
                {
                  name: 'Jan-Michael Vincent',
                  id: '173',
                  type: '',
                },
                {
                  name: 'Larva Alien',
                  id: '199',
                  type: 'Larva alien',
                },
                {
                  name: 'Little Dipper',
                  id: '205',
                  type: 'Tinymouth',
                },
                {
                  name: 'Michael Jenkins',
                  id: '223',
                  type: '',
                },
                {
                  name: 'Michael McLick',
                  id: '224',
                  type: '',
                },
                {
                  name: 'Michael Thompson',
                  id: '225',
                  type: 'Conjoined twin',
                },
                {
                  name: 'Octopus Man',
                  id: '254',
                  type: 'Octopus-Person',
                },
                {
                  name: 'Phillip Jacobs',
                  id: '260',
                  type: '',
                },
                {
                  name: 'Pibbles Bodyguard',
                  id: '263',
                  type: 'Hairy alien',
                },
                {
                  name: 'Pichael Thompson',
                  id: '264',
                  type: 'Conjoined twin',
                },
                {
                  name: 'Randy Dicknose',
                  id: '275',
                  type: '',
                },
                {
                  name: 'Shlaammi',
                  id: '312',
                  type: '',
                },
                {
                  name: 'Shrimply Pibbles',
                  id: '321',
                  type: '',
                },
                {
                  name: 'Stealy',
                  id: '334',
                  type: '',
                },
                {
                  name: 'Traflorkian',
                  id: '362',
                  type: 'Traflorkian',
                },
                {
                  name: 'Tumblorkian',
                  id: '371',
                  type: 'Tumblorkian',
                },
                {
                  name: 'Yaarb',
                  id: '383',
                  type: '',
                },
                {
                  name: 'Yellow Headed Doctor',
                  id: '384',
                  type: '',
                },
                {
                  name: 'Pripudlian',
                  id: '435',
                  type: 'Pripudlian',
                },
                {
                  name: 'Arbolian Mentirososian',
                  id: '454',
                  type: '',
                },
                {
                  name: 'St. Gloopy Noops Nurse',
                  id: '455',
                  type: '',
                },
                {
                  name: 'Nano Doctor',
                  id: '456',
                  type: 'Nano Alien',
                },
                {
                  name: 'Funny Songs Presenter',
                  id: '457',
                  type: '',
                },
                {
                  name: 'Tax Attorney',
                  id: '458',
                  type: '',
                },
                {
                  name: 'Butthole Ice Cream Guy',
                  id: '459',
                  type: '',
                },
                {
                  name: 'Traflorkian Journalist',
                  id: '460',
                  type: 'Traflorkian',
                },
              ],
              name: 'Interdimensional Cable 2: Tempting Fate',
              air_date: 'September 20, 2015',
              id: '19',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Arthricia',
                  id: '26',
                  type: 'Cat-Person',
                },
                {
                  name: 'General Store Owner',
                  id: '139',
                  type: 'Cat-Person',
                },
                {
                  name: 'Lighthouse Keeper',
                  id: '202',
                  type: 'Cat-Person',
                },
                {
                  name: 'Purge Planet Ruler',
                  id: '273',
                  type: 'Cat-Person',
                },
                {
                  name: 'Taddy Mason',
                  id: '341',
                  type: '',
                },
              ],
              name: "Look Who's Purging Now",
              air_date: 'September 27, 2015',
              id: '20',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Arcade Alien',
                  id: '23',
                  type: '',
                },
                {
                  name: 'Birdperson',
                  id: '47',
                  type: 'Bird-Person',
                },
                {
                  name: 'Boobloosian',
                  id: '55',
                  type: 'Boobloosian',
                },
                {
                  name: 'Courier Flap',
                  id: '75',
                  type: '',
                },
                {
                  name: 'Donna Gueterman',
                  id: '102',
                  type: '',
                },
                {
                  name: 'Galactic Federation President',
                  id: '130',
                  type: 'Gromflomite',
                },
                {
                  name: 'Gar Gloonch',
                  id: '131',
                  type: 'Zombodian',
                },
                {
                  name: 'Garblovian',
                  id: '133',
                  type: 'Garblovian',
                },
                {
                  name: 'Kozbian',
                  id: '194',
                  type: 'Tentacle alien',
                },
                {
                  name: 'Larva Alien',
                  id: '199',
                  type: 'Larva alien',
                },
                {
                  name: 'Lil B',
                  id: '203',
                  type: 'Snail alien',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '240',
                  type: '',
                },
                {
                  name: 'Mr. Poopybutthole',
                  id: '244',
                  type: '',
                },
                {
                  name: 'Pat Gueterman',
                  id: '256',
                  type: '',
                },
                {
                  name: 'Photography Cyborg',
                  id: '261',
                  type: '',
                },
                {
                  name: 'Scropon',
                  id: '308',
                  type: 'Lobster-Alien',
                },
                {
                  name: 'Scrotian',
                  id: '309',
                  type: 'Scrotian',
                },
                {
                  name: 'Shimshamian',
                  id: '311',
                  type: 'Shimshamian',
                },
                {
                  name: 'Squanchy',
                  id: '331',
                  type: 'Cat-Person',
                },
                {
                  name: 'Tammy Guetermann',
                  id: '344',
                  type: '',
                },
                {
                  name: 'Tophat Jones',
                  id: '358',
                  type: 'Leprechaun',
                },
                {
                  name: 'Traflorkian',
                  id: '362',
                  type: 'Traflorkian',
                },
                {
                  name: 'Wedding Bartender',
                  id: '379',
                  type: '',
                },
                {
                  name: 'Arbolian Mentirososian',
                  id: '454',
                  type: '',
                },
              ],
              name: 'The Wedding Squanchers',
              air_date: 'October 4, 2015',
              id: '21',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Aqua Morty',
                  id: '21',
                  type: 'Fish-Person',
                },
                {
                  name: 'Aqua Rick',
                  id: '22',
                  type: 'Fish-Person',
                },
                {
                  name: 'Beth Smith',
                  id: '38',
                  type: '',
                },
                {
                  name: 'Big Head Morty',
                  id: '42',
                  type: 'Human with giant head',
                },
                {
                  name: 'Birdperson',
                  id: '47',
                  type: 'Bird-Person',
                },
                {
                  name: 'Black Rick',
                  id: '48',
                  type: '',
                },
                {
                  name: 'Borpocian',
                  id: '57',
                  type: 'Elephant-Person',
                },
                {
                  name: 'Commander Rick',
                  id: '69',
                  type: '',
                },
                {
                  name: 'Conroy',
                  id: '71',
                  type: '',
                },
                {
                  name: 'Cyclops Rick',
                  id: '86',
                  type: '',
                },
                {
                  name: 'Diane Sanchez',
                  id: '94',
                  type: '',
                },
                {
                  name: 'Dipper and Mabel Mortys',
                  id: '95',
                  type: '',
                },
                {
                  name: 'Doofus Rick',
                  id: '103',
                  type: '',
                },
                {
                  name: 'Cornvelious Daniel',
                  id: '150',
                  type: 'Gromflomite',
                },
                {
                  name: 'Hammerhead Morty',
                  id: '152',
                  type: 'Hammerhead-Person',
                },
                {
                  name: 'Jerry Smith',
                  id: '175',
                  type: '',
                },
                {
                  name: 'Lawyer Morty',
                  id: '200',
                  type: '',
                },
                {
                  name: 'Maximums Rickimus',
                  id: '215',
                  type: '',
                },
                {
                  name: 'Morty Rick',
                  id: '231',
                  type: '',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '240',
                  type: '',
                },
                {
                  name: 'Quantum Rick',
                  id: '274',
                  type: '',
                },
                {
                  name: 'Rick Prime',
                  id: '285',
                  type: '',
                },
                {
                  name: 'Rick D-99',
                  id: '286',
                  type: '',
                },
                {
                  name: 'Ricktiminus Sancheziminius',
                  id: '294',
                  type: '',
                },
                {
                  name: 'Riq IV',
                  id: '295',
                  type: '',
                },
                {
                  name: 'Solicitor Rick',
                  id: '330',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '338',
                  type: '',
                },
                {
                  name: 'Tammy Guetermann',
                  id: '344',
                  type: '',
                },
                {
                  name: 'Wall Crawling Rick',
                  id: '378',
                  type: 'Lizard-Person',
                },
                {
                  name: 'Unknown Rick',
                  id: '380',
                  type: '',
                },
                {
                  name: 'Yellow Shirt Rick',
                  id: '385',
                  type: '',
                },
                {
                  name: 'Zeta Alpha Rick',
                  id: '389',
                  type: '',
                },
                {
                  name: "Communication's Responsible Rick",
                  id: '461',
                  type: '',
                },
                {
                  name: "Teleportation's Responsible Rick",
                  id: '462',
                  type: '',
                },
                {
                  name: 'SEAL Team Rick',
                  id: '463',
                  type: '',
                },
                {
                  name: 'SEAL Team Rick',
                  id: '464',
                  type: '',
                },
                {
                  name: 'SEAL Team Rick',
                  id: '465',
                  type: '',
                },
                {
                  name: 'SEAL Team Rick',
                  id: '466',
                  type: '',
                },
                {
                  name: 'Phoenixperson',
                  id: '592',
                  type: 'Cyborg',
                },
              ],
              name: 'The Rickshank Rickdemption',
              air_date: 'April 1, 2017',
              id: '22',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Armothy',
                  id: '25',
                  type: 'Self-aware arm',
                },
                {
                  name: 'Blue Footprint Guy',
                  id: '52',
                  type: '',
                },
                {
                  name: 'Colossus',
                  id: '68',
                  type: '',
                },
                {
                  name: 'Eli',
                  id: '110',
                  type: '',
                },
                {
                  name: "Eli's Girlfriend",
                  id: '111',
                  type: '',
                },
                {
                  name: 'Genital Washer',
                  id: '140',
                  type: '',
                },
                {
                  name: 'Hemorrhage',
                  id: '156',
                  type: '',
                },
                {
                  name: 'Mechanical Morty',
                  id: '217',
                  type: '',
                },
                {
                  name: 'Mechanical Rick',
                  id: '218',
                  type: '',
                },
                {
                  name: 'Mechanical Summer',
                  id: '219',
                  type: '',
                },
                {
                  name: 'Mohawk Guy',
                  id: '228',
                  type: '',
                },
                {
                  name: 'Slaveowner',
                  id: '323',
                  type: '',
                },
                {
                  name: 'Taint Washer',
                  id: '342',
                  type: '',
                },
              ],
              name: 'Rickmancing the Stone',
              air_date: 'July 30, 2017',
              id: '23',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Agency Director',
                  id: '9',
                  type: '',
                },
                {
                  name: 'Concerto',
                  id: '70',
                  type: '',
                },
                {
                  name: 'Dr. Wong',
                  id: '107',
                  type: '',
                },
                {
                  name: 'Izzy',
                  id: '167',
                  type: 'Cat',
                },
                {
                  name: 'Jaguar',
                  id: '171',
                  type: '',
                },
                {
                  name: 'Katarina',
                  id: '189',
                  type: '',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '240',
                  type: '',
                },
                {
                  name: 'Pickle Rick',
                  id: '265',
                  type: 'Pickle',
                },
                {
                  name: 'Principal Vagina',
                  id: '272',
                  type: '',
                },
                {
                  name: 'Rat Boss',
                  id: '276',
                  type: 'Rat',
                },
                {
                  name: 'Snuffles (Snowball)',
                  id: '329',
                  type: 'Dog',
                },
              ],
              name: 'Pickle Rick',
              air_date: 'August 6, 2017',
              id: '24',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Alan Rails',
                  id: '10',
                  type: 'Superhuman (Ghost trains summoner)',
                },
                {
                  name: 'Arcade Alien',
                  id: '23',
                  type: '',
                },
                {
                  name: 'Bepisian',
                  id: '35',
                  type: 'Bepisian',
                },
                {
                  name: 'Calypso',
                  id: '60',
                  type: 'Superhuman',
                },
                {
                  name: 'Crocubot',
                  id: '81',
                  type: 'Robot-Crocodile hybrid',
                },
                {
                  name: 'Cynthia',
                  id: '88',
                  type: '',
                },
                {
                  name: 'Diablo Verde',
                  id: '93',
                  type: 'Demon',
                },
                {
                  name: 'Doom-Nomitron',
                  id: '104',
                  type: 'Shapeshifter',
                },
                {
                  name: 'Flansian',
                  id: '125',
                  type: 'Flansian',
                },
                {
                  name: "Jessica's Friend",
                  id: '181',
                  type: '',
                },
                {
                  name: 'Lady Katana',
                  id: '198',
                  type: 'Cyborg',
                },
                {
                  name: 'Logic',
                  id: '208',
                  type: '',
                },
                {
                  name: 'MC Haps',
                  id: '216',
                  type: '',
                },
                {
                  name: 'Million Ants',
                  id: '226',
                  type: 'Sentient ant colony',
                },
                {
                  name: 'Nancy',
                  id: '251',
                  type: '',
                },
                {
                  name: 'Noob-Noob',
                  id: '252',
                  type: '',
                },
                {
                  name: 'Revolio Clockberg Jr.',
                  id: '282',
                  type: 'Gear-Person',
                },
                {
                  name: 'Scrotian',
                  id: '309',
                  type: 'Scrotian',
                },
                {
                  name: 'Shimshamian',
                  id: '311',
                  type: 'Shimshamian',
                },
                {
                  name: 'Stair Goblin',
                  id: '333',
                  type: 'Stair goblin',
                },
                {
                  name: 'Supernova',
                  id: '340',
                  type: 'Superhuman',
                },
                {
                  name: 'Traflorkian',
                  id: '362',
                  type: 'Traflorkian',
                },
                {
                  name: 'Vance Maximus',
                  id: '375',
                  type: '',
                },
                {
                  name: 'Worldender',
                  id: '382',
                  type: '',
                },
                {
                  name: 'Greebybobe',
                  id: '395',
                  type: 'Greebybobe',
                },
                {
                  name: 'Pripudlian',
                  id: '435',
                  type: 'Pripudlian',
                },
              ],
              name: 'Vindicators 3: The Return of Worldender',
              air_date: 'August 13, 2017',
              id: '25',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Arcade Alien',
                  id: '23',
                  type: '',
                },
                {
                  name: 'Birdperson',
                  id: '47',
                  type: 'Bird-Person',
                },
                {
                  name: 'Ethan',
                  id: '115',
                  type: '',
                },
                {
                  name: 'Gene',
                  id: '137',
                  type: '',
                },
                {
                  name: 'Gibble Snake',
                  id: '142',
                  type: 'Animal',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: 'Lisa',
                  id: '204',
                  type: '',
                },
                {
                  name: 'Risotto Groupon',
                  id: '296',
                  type: 'Blue ape alien',
                },
                {
                  name: "Risotto's Tentacled Henchman",
                  id: '297',
                  type: 'Tentacle alien',
                },
                {
                  name: 'Shmooglite Runner',
                  id: '319',
                  type: 'Animal',
                },
                {
                  name: 'Shnoopy Bloopers',
                  id: '320',
                  type: '',
                },
                {
                  name: 'Tricia Lange',
                  id: '365',
                  type: '',
                },
                {
                  name: 'Tusked Assassin',
                  id: '369',
                  type: 'Tuskfish',
                },
                {
                  name: 'Morphizer-XE Customer Support',
                  id: '467',
                  type: '',
                },
                {
                  name: 'Morphizer-XE Customer Support',
                  id: '468',
                  type: '',
                },
                {
                  name: 'Morphizer-XE Customer Support',
                  id: '469',
                  type: '',
                },
              ],
              name: 'The Whirly Dirly Conspiracy',
              air_date: 'August 20, 2017',
              id: '26',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Abadango Cluster Princess',
                  id: '6',
                  type: '',
                },
                {
                  name: 'Father Bob',
                  id: '124',
                  type: '',
                },
                {
                  name: 'Jacqueline',
                  id: '170',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: "Jessica's Friend",
                  id: '181',
                  type: '',
                },
                {
                  name: 'Mitch',
                  id: '227',
                  type: '',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '240',
                  type: '',
                },
                {
                  name: 'Mrs. Pancakes',
                  id: '246',
                  type: '',
                },
                {
                  name: 'Principal Vagina',
                  id: '272',
                  type: '',
                },
                {
                  name: 'Stacy',
                  id: '332',
                  type: '',
                },
                {
                  name: 'Toxic Morty',
                  id: '360',
                  type: "Morty's toxic side",
                },
                {
                  name: 'Toxic Rick',
                  id: '361',
                  type: "Rick's toxic side",
                },
                {
                  name: 'Tricia Lange',
                  id: '365',
                  type: '',
                },
                {
                  name: 'Alien Spa Employee',
                  id: '470',
                  type: '',
                },
                {
                  name: 'Little Voltron',
                  id: '471',
                  type: '',
                },
              ],
              name: 'Rest and Ricklaxation',
              air_date: 'August 27, 2017',
              id: '27',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Adjudicator Rick',
                  id: '8',
                  type: '',
                },
                {
                  name: 'Antenna Morty',
                  id: '18',
                  type: 'Human with antennae',
                },
                {
                  name: 'Aqua Rick',
                  id: '22',
                  type: 'Fish-Person',
                },
                {
                  name: 'Artist Morty',
                  id: '27',
                  type: '',
                },
                {
                  name: 'Big Morty',
                  id: '43',
                  type: '',
                },
                {
                  name: 'Body Guard Morty',
                  id: '44',
                  type: '',
                },
                {
                  name: 'Black Rick',
                  id: '48',
                  type: '',
                },
                {
                  name: 'Bootleg Portal Chemist Rick',
                  id: '56',
                  type: '',
                },
                {
                  name: 'Campaign Manager Morty',
                  id: '61',
                  type: '',
                },
                {
                  name: 'Cool Rick',
                  id: '72',
                  type: '',
                },
                {
                  name: 'Cop Morty',
                  id: '73',
                  type: '',
                },
                {
                  name: 'Cop Rick',
                  id: '74',
                  type: '',
                },
                {
                  name: 'Cowboy Rick',
                  id: '78',
                  type: '',
                },
                {
                  name: 'Cyclops Morty',
                  id: '85',
                  type: '',
                },
                {
                  name: 'Cyclops Rick',
                  id: '86',
                  type: '',
                },
                {
                  name: 'Evil Morty',
                  id: '118',
                  type: '',
                },
                {
                  name: 'Fat Morty',
                  id: '123',
                  type: '',
                },
                {
                  name: 'Garment District Rick',
                  id: '135',
                  type: '',
                },
                {
                  name: 'Glasses Morty',
                  id: '143',
                  type: '',
                },
                {
                  name: 'Investigator Rick',
                  id: '165',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: 'Juggling Rick',
                  id: '187',
                  type: '',
                },
                {
                  name: 'Lizard Morty',
                  id: '206',
                  type: 'Lizard-Person',
                },
                {
                  name: 'Mega Fruit Farmer Rick',
                  id: '220',
                  type: '',
                },
                {
                  name: 'Morty Mart Manager Morty',
                  id: '229',
                  type: '',
                },
                {
                  name: 'Morty K-22',
                  id: '233',
                  type: '',
                },
                {
                  name: 'Mortytown Loco',
                  id: '235',
                  type: '',
                },
                {
                  name: 'Plumber Rick',
                  id: '267',
                  type: '',
                },
                {
                  name: 'Regional Manager Rick',
                  id: '278',
                  type: '',
                },
                {
                  name: 'Reverse Rick Outrage',
                  id: '281',
                  type: '',
                },
                {
                  name: 'Rick D. Sanchez III',
                  id: '283',
                  type: '',
                },
                {
                  name: 'Rick Guilt Rick',
                  id: '284',
                  type: '',
                },
                {
                  name: 'Rick D716',
                  id: '287',
                  type: '',
                },
                {
                  name: 'Rick D716-B',
                  id: '288',
                  type: '',
                },
                {
                  name: 'Rick D716-C',
                  id: '289',
                  type: '',
                },
                {
                  name: 'Rick J-22',
                  id: '291',
                  type: '',
                },
                {
                  name: 'Rick K-22',
                  id: '292',
                  type: '',
                },
                {
                  name: 'Simple Rick',
                  id: '322',
                  type: '',
                },
                {
                  name: 'Slick Morty',
                  id: '325',
                  type: '',
                },
                {
                  name: 'Slow Rick',
                  id: '328',
                  type: '',
                },
                {
                  name: 'Teacher Rick',
                  id: '345',
                  type: '',
                },
                {
                  name: 'Trunk Morty',
                  id: '366',
                  type: 'Trunk-Person',
                },
                {
                  name: 'Trunk Man',
                  id: '367',
                  type: 'Trunk-Person',
                },
                {
                  name: 'Bearded Morty',
                  id: '392',
                  type: '',
                },
                {
                  name: 'Baby Rick',
                  id: '472',
                  type: 'Clone',
                },
                {
                  name: 'Bartender Morty',
                  id: '473',
                  type: '',
                },
                {
                  name: 'Dancer Cowboy Morty',
                  id: '474',
                  type: '',
                },
                {
                  name: 'Dancer Morty',
                  id: '475',
                  type: '',
                },
                {
                  name: 'Flower Morty',
                  id: '476',
                  type: 'Human with a flower in his head',
                },
                {
                  name: 'Hairdresser Rick',
                  id: '477',
                  type: '',
                },
                {
                  name: 'Journalist Rick',
                  id: '478',
                  type: '',
                },
                {
                  name: 'Private Sector Rick',
                  id: '479',
                  type: '',
                },
                {
                  name: 'Purple Morty',
                  id: '480',
                  type: '',
                },
                {
                  name: 'Retired General Rick',
                  id: '481',
                  type: '',
                },
                {
                  name: 'Secret Service Rick',
                  id: '482',
                  type: '',
                },
                {
                  name: 'Steve Jobs Rick',
                  id: '483',
                  type: '',
                },
                {
                  name: 'Sheik Rick',
                  id: '484',
                  type: '',
                },
                {
                  name: 'Modern Rick',
                  id: '485',
                  type: '',
                },
                {
                  name: 'Tan Rick',
                  id: '486',
                  type: '',
                },
                {
                  name: 'Visor Rick',
                  id: '487',
                  type: '',
                },
                {
                  name: 'Colonial Rick',
                  id: '488',
                  type: '',
                },
                {
                  name: 'P-Coat Rick',
                  id: '489',
                  type: '',
                },
              ],
              name: 'The Ricklantis Mixup',
              air_date: 'September 10, 2017',
              id: '28',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Beebo',
                  id: '33',
                  type: '',
                },
                {
                  name: 'Collector',
                  id: '67',
                  type: 'Light bulb-Alien',
                },
                {
                  name: 'Gobo',
                  id: '147',
                  type: '',
                },
                {
                  name: 'Gordon Lunas',
                  id: '149',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: 'Mr. Meeseeks',
                  id: '242',
                  type: 'Meeseeks',
                },
                {
                  name: 'Mr. Poopybutthole',
                  id: '244',
                  type: '',
                },
                {
                  name: 'Nancy',
                  id: '251',
                  type: '',
                },
                {
                  name: 'Principal Vagina',
                  id: '272',
                  type: '',
                },
                {
                  name: 'Snuffles (Snowball)',
                  id: '329',
                  type: 'Dog',
                },
                {
                  name: 'Truth Tortoise',
                  id: '368',
                  type: 'Omniscient being',
                },
                {
                  name: 'Voltematron',
                  id: '377',
                  type: 'Parasite',
                },
                {
                  name: 'Zick Zack',
                  id: '390',
                  type: 'Floop Floopian',
                },
                {
                  name: 'Chang',
                  id: '490',
                  type: '',
                },
                {
                  name: 'Dr. Eleanor Arroway',
                  id: '491',
                  type: '',
                },
              ],
              name: "Morty's Mind Blowers",
              air_date: 'September 17, 2017',
              id: '29',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Brad',
                  id: '58',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: 'Joseph Eli Lipkip',
                  id: '185',
                  type: '',
                },
                {
                  name: 'Keara',
                  id: '190',
                  type: 'Krootabulan',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '240',
                  type: '',
                },
                {
                  name: 'Mr. Poopybutthole',
                  id: '244',
                  type: '',
                },
                {
                  name: 'Mrs. Lipkip',
                  id: '245',
                  type: '',
                },
                {
                  name: 'Mrs. Sanchez',
                  id: '249',
                  type: '',
                },
                {
                  name: 'Snuffles (Snowball)',
                  id: '329',
                  type: 'Dog',
                },
                {
                  name: 'Thomas Lipkip',
                  id: '350',
                  type: '',
                },
                {
                  name: "Tommy's Clone",
                  id: '357',
                  type: 'Clone',
                },
                {
                  name: 'Trandor',
                  id: '363',
                  type: 'Krootabulan',
                },
                {
                  name: 'Varrix',
                  id: '492',
                  type: '',
                },
              ],
              name: "The ABC's of Beth",
              air_date: 'September 24, 2017',
              id: '30',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Alien Googah',
                  id: '13',
                  type: '',
                },
                {
                  name: 'Baby Poopybutthole',
                  id: '30',
                  type: '',
                },
                {
                  name: 'Invisi-trooper',
                  id: '166',
                  type: '',
                },
                {
                  name: 'Mr. Poopybutthole',
                  id: '244',
                  type: '',
                },
                {
                  name: 'Amy Poopybutthole',
                  id: '247',
                  type: '',
                },
                {
                  name: 'Presidentress of The Mega Gargantuans',
                  id: '269',
                  type: 'Mega Gargantuan',
                },
                {
                  name: 'Steve',
                  id: '335',
                  type: '',
                },
                {
                  name: 'President Curtis',
                  id: '347',
                  type: '',
                },
                {
                  name: 'Secretary of the Interior',
                  id: '493',
                  type: '',
                },
              ],
              name: 'The Rickchurian Mortydate',
              air_date: 'October 1, 2017',
              id: '31',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: 'Mr. Meeseeks',
                  id: '242',
                  type: 'Meeseeks',
                },
                {
                  name: 'Crystal Poacher',
                  id: '494',
                  type: '',
                },
                {
                  name: 'Crystal Poacher',
                  id: '495',
                  type: '',
                },
                {
                  name: 'Crystal Poacher',
                  id: '496',
                  type: '',
                },
                {
                  name: 'Hologram Rick',
                  id: '497',
                  type: 'Hologram',
                },
                {
                  name: 'Fascist Rick',
                  id: '498',
                  type: '',
                },
                {
                  name: 'Fascist Morty',
                  id: '499',
                  type: '',
                },
                {
                  name: 'Fascist Mr. President',
                  id: '500',
                  type: '',
                },
                {
                  name: 'Fascist Rick’s Clone',
                  id: '501',
                  type: 'Clone',
                },
                {
                  name: 'Revolio Clockberg Jr.',
                  id: '502',
                  type: 'Gear-Person',
                },
                {
                  name: 'Fascist Shrimp Rick',
                  id: '503',
                  type: 'Shrimp',
                },
                {
                  name: 'Fascist Shrimp Rick’s Clone',
                  id: '504',
                  type: 'Shrimp',
                },
                {
                  name: 'Fascist Shrimp Morty',
                  id: '505',
                  type: 'Shrimp',
                },
                {
                  name: 'Fascist Shrimp SS',
                  id: '506',
                  type: 'Shrimp',
                },
                {
                  name: 'Fascist Teddy Bear Rick',
                  id: '507',
                  type: 'Teddy Bear',
                },
                {
                  name: 'Fascist Teddy Bear Rick’s Clone',
                  id: '508',
                  type: 'Teddy Bear',
                },
                {
                  name: 'Bully',
                  id: '509',
                  type: '',
                },
                {
                  name: 'Anchorman',
                  id: '510',
                  type: '',
                },
                {
                  name: 'Anchorwoman',
                  id: '511',
                  type: '',
                },
                {
                  name: 'Morty’s Lawyer',
                  id: '512',
                  type: '',
                },
                {
                  name: 'Judge',
                  id: '513',
                  type: '',
                },
                {
                  name: 'Public Opinion Judge',
                  id: '514',
                  type: '',
                },
                {
                  name: 'Caterpillar Mr. Goldenfold',
                  id: '515',
                  type: 'Caterpillar',
                },
                {
                  name: 'Wasp Rick',
                  id: '516',
                  type: 'Wasp',
                },
                {
                  name: 'Wasp Rick’s Clone',
                  id: '517',
                  type: 'Wasp',
                },
                {
                  name: 'Wasp Morty',
                  id: '518',
                  type: 'Wasp',
                },
                {
                  name: 'Wasp Summer',
                  id: '519',
                  type: 'Wasp',
                },
                {
                  name: 'Wasp Jerry',
                  id: '520',
                  type: 'Wasp',
                },
                {
                  name: 'Wasp Beth',
                  id: '521',
                  type: 'Wasp',
                },
                {
                  name: 'Caterpillar Mr. Goldenfold’s Larvae',
                  id: '522',
                  type: 'Caterpillar',
                },
                {
                  name: 'Boglin',
                  id: '523',
                  type: 'Toy',
                },
                {
                  name: 'Kirkland Brand Mr. Meeseeks',
                  id: '524',
                  type: 'Meeseeks',
                },
              ],
              name: 'Edge of Tomorty: Rick, Die, Rickpeat',
              air_date: 'November 10, 2019',
              id: '32',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Glootie',
                  id: '525',
                  type: 'Monogatron',
                },
                {
                  name: 'Danny Publitz',
                  id: '526',
                  type: '',
                },
                {
                  name: 'Mothership Intern',
                  id: '527',
                  type: 'Monogatron',
                },
                {
                  name: 'Monogatron Leader',
                  id: '528',
                  type: 'Monogatron',
                },
                {
                  name: 'Lizard',
                  id: '529',
                  type: 'Lizard',
                },
                {
                  name: 'Deliverance',
                  id: '530',
                  type: '',
                },
                {
                  name: 'Tony',
                  id: '531',
                  type: '',
                },
                {
                  name: 'Tony’s Wife',
                  id: '532',
                  type: '',
                },
                {
                  name: 'Monogatron Queen',
                  id: '533',
                  type: 'Monogatron',
                },
                {
                  name: "Tony's Dad",
                  id: '534',
                  type: '',
                },
                {
                  name: 'Jeff',
                  id: '535',
                  type: '',
                },
                {
                  name: 'Josiah',
                  id: '536',
                  type: '',
                },
                {
                  name: 'Maggie',
                  id: '537',
                  type: '',
                },
                {
                  name: 'Priest Witherspoon',
                  id: '538',
                  type: '',
                },
                {
                  name: 'Richard',
                  id: '539',
                  type: '',
                },
                {
                  name: 'Running Bird',
                  id: '540',
                  type: '',
                },
                {
                  name: "Secretary at Tony's",
                  id: '541',
                  type: '',
                },
                {
                  name: 'Mountain Sweat Jerry',
                  id: '542',
                  type: '',
                },
                {
                  name: 'Vermigurber',
                  id: '543',
                  type: 'Fly',
                },
              ],
              name: 'The Old Man and the Seat',
              air_date: 'November 17, 2019',
              id: '33',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Mr. Poopybutthole',
                  id: '244',
                  type: '',
                },
                {
                  name: 'Miles Knightly',
                  id: '544',
                  type: '',
                },
                {
                  name: 'Heist-Con Receptionist',
                  id: '545',
                  type: '',
                },
                {
                  name: 'Angie Flint',
                  id: '546',
                  type: 'Cyborg',
                },
                {
                  name: 'Glar',
                  id: '547',
                  type: '',
                },
                {
                  name: 'Truckula',
                  id: '548',
                  type: 'Vampire',
                },
                {
                  name: 'Snake Arms',
                  id: '549',
                  type: '',
                },
                {
                  name: 'Double Microwawe',
                  id: '550',
                  type: 'Cyborg',
                },
                {
                  name: 'Monitor Lord',
                  id: '551',
                  type: '',
                },
                {
                  name: 'Key Catcher',
                  id: '552',
                  type: '',
                },
                {
                  name: 'The Shapeshiftress',
                  id: '553',
                  type: 'Shapeshifter',
                },
                {
                  name: 'Heistotron',
                  id: '554',
                  type: '',
                },
                {
                  name: 'Randotron',
                  id: '555',
                  type: '',
                },
                {
                  name: 'Hephaestus',
                  id: '556',
                  type: 'God',
                },
                {
                  name: 'Ventriloquiver',
                  id: '557',
                  type: 'Dummy',
                },
                {
                  name: 'Elon Tusk',
                  id: '558',
                  type: 'Human with tusks',
                },
                {
                  name: 'Gramuflackian Anchorman',
                  id: '559',
                  type: 'Gramuflackian',
                },
                {
                  name: 'Gramuflackian General',
                  id: '560',
                  type: 'Gramuflackian',
                },
                {
                  name: 'Netflix Executive',
                  id: '561',
                  type: '',
                },
              ],
              name: "One Crew Over the Crewcoo's Morty",
              air_date: 'November 24, 2019',
              id: '34',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Balthromaw',
                  id: '562',
                  type: 'Dragon',
                },
                {
                  name: 'The Wizard',
                  id: '563',
                  type: '',
                },
                {
                  name: 'Talking Cat',
                  id: '564',
                  type: '',
                },
                {
                  name: 'Debrah',
                  id: '565',
                  type: 'Dragon',
                },
                {
                  name: 'Debrah’s Partner',
                  id: '566',
                  type: 'Dragon',
                },
                {
                  name: 'Michael',
                  id: '567',
                  type: 'Dragon',
                },
                {
                  name: 'Slut Dragon',
                  id: '568',
                  type: 'Dragon',
                },
                {
                  name: 'Shadow Jacker',
                  id: '569',
                  type: 'Dragon',
                },
                {
                  name: 'Chachi',
                  id: '570',
                  type: '',
                },
              ],
              name: "Claw and Hoarder: Special Ricktim's Morty",
              air_date: 'December 8, 2019',
              id: '35',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Nancy',
                  id: '251',
                  type: '',
                },
                {
                  name: 'Shleemypants',
                  id: '313',
                  type: 'Omniscient being',
                },
                {
                  name: 'Tricia Lange',
                  id: '365',
                  type: '',
                },
                {
                  name: 'Slippy',
                  id: '571',
                  type: 'Snake',
                },
                {
                  name: 'Robot Snake',
                  id: '572',
                  type: 'Snake',
                },
                {
                  name: 'Snake Hitler',
                  id: '573',
                  type: 'Snake',
                },
                {
                  name: 'Snake Lincoln',
                  id: '574',
                  type: 'Snake',
                },
                {
                  name: 'Snake Resistance Robot',
                  id: '575',
                  type: 'Human-Snake hybrid',
                },
                {
                  name: 'Snake Linguist',
                  id: '576',
                  type: 'Snake',
                },
                {
                  name: 'Snake Terminator',
                  id: '577',
                  type: 'Snake',
                },
                {
                  name: 'Snake Soldier',
                  id: '578',
                  type: 'Snake',
                },
                {
                  name: 'Snake with Legs',
                  id: '579',
                  type: 'Snake',
                },
                {
                  name: 'Secret Service Snake',
                  id: '580',
                  type: 'Snake',
                },
                {
                  name: 'Anchosnake',
                  id: '581',
                  type: 'Snake',
                },
                {
                  name: 'Anchosnake',
                  id: '582',
                  type: 'Snake',
                },
                {
                  name: "80's snake",
                  id: '583',
                  type: 'Snake',
                },
                {
                  name: 'Bar Customer',
                  id: '584',
                  type: '',
                },
                {
                  name: 'Bartender',
                  id: '585',
                  type: '',
                },
                {
                  name: 'PC Basketball Player',
                  id: '586',
                  type: '',
                },
                {
                  name: 'Cavesnake',
                  id: '587',
                  type: 'Snake',
                },
                {
                  name: 'Pet Shop Employee',
                  id: '588',
                  type: '',
                },
                {
                  name: 'Snake Reporter',
                  id: '589',
                  type: 'Snake',
                },
                {
                  name: 'High Pilot',
                  id: '590',
                  type: '',
                },
                {
                  name: 'High Pilot',
                  id: '591',
                  type: '',
                },
              ],
              name: 'Rattlestar Ricklactica',
              air_date: 'December 15, 2019',
              id: '36',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Tickets Please Guy',
                  id: '593',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Floaty Bloody Man',
                  id: '594',
                  type: 'Half Soulless Puppet',
                },
                {
                  name: 'Floaty Non-Gasm Brotherhood Member',
                  id: '595',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Floaty Non-Gasm Brotherhood Member Friend',
                  id: '596',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Abradolf Lincler',
                  id: '597',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Biblesaurus',
                  id: '598',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Birdperson',
                  id: '599',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Cats Fan',
                  id: '600',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Christmas Storyteller',
                  id: '601',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Cookies Guy',
                  id: '602',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Crossy',
                  id: '603',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Female Scorpion',
                  id: '604',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Floaty Bloody Man’s Daughter',
                  id: '605',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Goomby',
                  id: '606',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Hairspray Fan',
                  id: '607',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Jesus Christ',
                  id: '608',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Josh',
                  id: '609',
                  type: 'Soulless Puppet',
                },
                {
                  name: "Josh's Sister",
                  id: '610',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Leah',
                  id: '611',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Marcus',
                  id: '612',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Mike Johnson',
                  id: '613',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Mr. Celery & Friends',
                  id: '614',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Musical Fan',
                  id: '615',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Phantom of the Opera Fan',
                  id: '616',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Phoenixperson',
                  id: '617',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Private Smith',
                  id: '618',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Professor Sanchez',
                  id: '619',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Ramamama Lord',
                  id: '620',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Ruth Bader Ginsburg',
                  id: '621',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Sarge',
                  id: '622',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Shrek The Musical Fan',
                  id: '623',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Snuffles',
                  id: '624',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Storylord',
                  id: '625',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Tammy Guetermann',
                  id: '626',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'The Concept of Time',
                  id: '627',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Beth Smith',
                  id: '628',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Summer Smith',
                  id: '629',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Morty Smith',
                  id: '630',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Rick Sanchez',
                  id: '631',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Train Cop',
                  id: '632',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Train Cops',
                  id: '633',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Train Cops Instructor',
                  id: '634',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Darth Poopybutthole',
                  id: '635',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Evil Morty',
                  id: '636',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Morty’s Disguise',
                  id: '637',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Rick’s Disguise',
                  id: '638',
                  type: 'Soulless Puppet',
                },
                {
                  name: 'Uncle Nibbles',
                  id: '639',
                  type: 'Soulless Puppet',
                },
              ],
              name: 'Never Ricking Morty',
              air_date: 'May 3, 2020',
              id: '37',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Tricia Lange',
                  id: '365',
                  type: '',
                },
                {
                  name: 'Angry Glorzo',
                  id: '640',
                  type: 'Glorzo',
                },
                {
                  name: 'Bruce',
                  id: '641',
                  type: 'Glorzo',
                },
                {
                  name: 'Council of Glorzos Member',
                  id: '642',
                  type: 'Glorzo',
                },
                {
                  name: 'Council of Glorzos Member',
                  id: '643',
                  type: 'Glorzo',
                },
                {
                  name: 'Old Glorzo',
                  id: '644',
                  type: 'Glorzo',
                },
                {
                  name: 'Shane',
                  id: '645',
                  type: 'Glorzo',
                },
                {
                  name: 'Steve',
                  id: '646',
                  type: 'Glorzo',
                },
                {
                  name: 'Troy',
                  id: '647',
                  type: 'Glorzo',
                },
              ],
              name: 'Promortyus',
              air_date: 'May 10, 2020',
              id: '38',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: 'Mr. Goldenfold',
                  id: '240',
                  type: '',
                },
                {
                  name: 'Crystal Dealers Boss',
                  id: '648',
                  type: '',
                },
                {
                  name: 'Crystal Dealer',
                  id: '649',
                  type: '',
                },
                {
                  name: 'Crystal Dealer',
                  id: '650',
                  type: '',
                },
                {
                  name: 'Crystal Dealer',
                  id: '651',
                  type: '',
                },
                {
                  name: 'SWAT Officer',
                  id: '652',
                  type: '',
                },
                {
                  name: 'Plane Crash Survivor',
                  id: '653',
                  type: '',
                },
                {
                  name: 'Plane Crash Survivor',
                  id: '654',
                  type: '',
                },
                {
                  name: 'Heroine Keith',
                  id: '655',
                  type: '',
                },
                {
                  name: 'Impervious to Acid SWAT Officer',
                  id: '656',
                  type: '',
                },
                {
                  name: 'Johnny Carson',
                  id: '657',
                  type: '',
                },
                {
                  name: 'Sonia Sotomayor',
                  id: '658',
                  type: '',
                },
                {
                  name: 'Morty’s Father-in-law',
                  id: '659',
                  type: '',
                },
                {
                  name: 'Morty’s Mother-in-law',
                  id: '660',
                  type: '',
                },
                {
                  name: 'Morty’s Girlfriend',
                  id: '661',
                  type: '',
                },
              ],
              name: 'The Vat of Acid Episode',
              air_date: 'May 17, 2020',
              id: '39',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Gaia',
                  id: '662',
                  type: 'Planet',
                },
                {
                  name: 'Reggie',
                  id: '663',
                  type: 'Zeus',
                },
                {
                  name: 'Ticktock',
                  id: '664',
                  type: 'Clay-Person',
                },
                {
                  name: 'Florflock',
                  id: '665',
                  type: 'Clay-Person',
                },
                {
                  name: 'Squeeb',
                  id: '666',
                  type: 'Clay-Person',
                },
              ],
              name: 'Childrick of Mort',
              air_date: 'May 24, 2020',
              id: '40',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Dr. Wong',
                  id: '107',
                  type: '',
                },
                {
                  name: 'Tammy Guetermann',
                  id: '344',
                  type: '',
                },
                {
                  name: 'Phoenixperson',
                  id: '592',
                  type: 'Cyborg',
                },
                {
                  name: 'Defiance Beth',
                  id: '667',
                  type: 'Clone',
                },
                {
                  name: 'Defiance Squanchette',
                  id: '668',
                  type: 'Cat-Person',
                },
                {
                  name: 'Defiance Doctor',
                  id: '669',
                  type: '',
                },
                {
                  name: 'New Improved Galactic Federation Guard',
                  id: '670',
                  type: 'Gromflomite',
                },
                {
                  name: 'New Improved Galactic Federation Guard',
                  id: '671',
                  type: 'Gromflomite',
                },
              ],
              name: 'Star Mort: Rickturn of the Jerri',
              air_date: 'May 31, 2020',
              id: '41',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Jessica',
                  id: '180',
                  type: 'Time God',
                },
                {
                  name: 'Mr. Nimbus',
                  id: '672',
                  type: 'Sexy Aquaman',
                },
                {
                  name: 'Hoovy',
                  id: '673',
                  type: 'Narnian',
                },
                {
                  name: 'Bova',
                  id: '674',
                  type: 'Narnian',
                },
                {
                  name: 'Japheth',
                  id: '675',
                  type: 'Narnian',
                },
                {
                  name: "Japheth's Middle Son",
                  id: '676',
                  type: 'Narnian',
                },
                {
                  name: "Japheth's Eldest Son",
                  id: '677',
                  type: 'Narnian',
                },
                {
                  name: "Japheth's Youngest Son",
                  id: '678',
                  type: 'Narnian',
                },
                {
                  name: "Japheth's Grandson",
                  id: '679',
                  type: 'Narnian',
                },
                {
                  name: 'Adam',
                  id: '680',
                  type: 'Narnian',
                },
                {
                  name: "Adam's Mother",
                  id: '681',
                  type: 'Narnian',
                },
                {
                  name: 'Warlock',
                  id: '682',
                  type: 'Narnian',
                },
                {
                  name: 'Evolved Narnian',
                  id: '683',
                  type: 'Narnian',
                },
                {
                  name: 'Mr. Nimbus Secretary',
                  id: '684',
                  type: 'Starfish',
                },
                {
                  name: 'Evolved Narnian Disguised as Morty',
                  id: '685',
                  type: 'Narnian',
                },
                {
                  name: "Mr. Nimbus' Squid",
                  id: '686',
                  type: 'Squid',
                },
              ],
              name: 'Mort Dinner Rick Andre',
              air_date: 'June 20, 2021',
              id: '42',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'President Curtis',
                  id: '347',
                  type: '',
                },
                {
                  name: 'Defiance Beth',
                  id: '667',
                  type: 'Clone',
                },
                {
                  name: 'Scarecrow Rick',
                  id: '687',
                  type: 'Decoy',
                },
                {
                  name: 'Scarecrow Summer',
                  id: '688',
                  type: 'Decoy',
                },
                {
                  name: 'Scarecrow Jerry',
                  id: '689',
                  type: 'Decoy',
                },
                {
                  name: 'Scarecrow Morty',
                  id: '690',
                  type: 'Decoy',
                },
                {
                  name: 'Scarecrow Beth',
                  id: '691',
                  type: 'Decoy',
                },
                {
                  name: 'Glockenspiel Jerry',
                  id: '692',
                  type: 'Decoy',
                },
                {
                  name: 'Glockenspiel Beth',
                  id: '693',
                  type: 'Decoy',
                },
                {
                  name: 'Glockenspiel Rick',
                  id: '694',
                  type: 'Decoy',
                },
                {
                  name: 'Glockenspiel Summer',
                  id: '695',
                  type: 'Decoy',
                },
                {
                  name: 'Glockenspiel Morty',
                  id: '696',
                  type: 'Decoy',
                },
                {
                  name: 'Wicker Beth',
                  id: '697',
                  type: 'Decoy',
                },
                {
                  name: 'Wicker Rick',
                  id: '698',
                  type: 'Decoy',
                },
                {
                  name: 'Wicker Morty',
                  id: '699',
                  type: 'Decoy',
                },
                {
                  name: 'Wicker Summer',
                  id: '700',
                  type: 'Decoy',
                },
                {
                  name: 'Metal Rick',
                  id: '701',
                  type: 'Decoy',
                },
                {
                  name: 'Gun Brain Rick',
                  id: '702',
                  type: 'Decoy',
                },
                {
                  name: 'Mr. Always Wants to be Hunted',
                  id: '703',
                  type: '',
                },
                {
                  name: 'Squid Costume Beth',
                  id: '704',
                  type: 'Decoy',
                },
                {
                  name: 'Squid Costume Jerry',
                  id: '705',
                  type: 'Decoy',
                },
                {
                  name: 'Squid Costume Morty',
                  id: '706',
                  type: 'Decoy',
                },
                {
                  name: 'Squid Costume Rick',
                  id: '707',
                  type: 'Decoy',
                },
                {
                  name: 'Squid Costume Summer',
                  id: '708',
                  type: 'Decoy',
                },
                {
                  name: 'Dracula',
                  id: '709',
                  type: 'Vampire',
                },
                {
                  name: 'Steve',
                  id: '710',
                  type: '',
                },
                {
                  name: 'When Wolf',
                  id: '711',
                  type: 'Whenwolf',
                },
                {
                  name: 'Too Cute to Murder Beth',
                  id: '712',
                  type: 'Decoy',
                },
                {
                  name: 'Too Cute to Murder Rick',
                  id: '713',
                  type: 'Decoy',
                },
                {
                  name: 'Too Cute to Murder Jerry',
                  id: '714',
                  type: 'Decoy',
                },
                {
                  name: 'Too Cute to Murder Morty',
                  id: '715',
                  type: 'Decoy',
                },
                {
                  name: 'Too Cute to Murder Summer',
                  id: '716',
                  type: 'Decoy',
                },
              ],
              name: 'Mortyplicity',
              air_date: 'June 27, 2021',
              id: '43',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Planetina',
                  id: '717',
                  type: 'Summon',
                },
                {
                  name: 'Daphne',
                  id: '718',
                  type: 'Morglutzian',
                },
                {
                  name: 'Diesel Weasel',
                  id: '719',
                  type: 'Weasel',
                },
                {
                  name: 'Eddie',
                  id: '720',
                  type: '',
                },
                {
                  name: 'Xing Ho',
                  id: '721',
                  type: '',
                },
                {
                  name: 'Air Tina-Teer',
                  id: '722',
                  type: '',
                },
                {
                  name: 'Water Tina-Teer',
                  id: '723',
                  type: '',
                },
                {
                  name: 'Planetina Buyer',
                  id: '724',
                  type: '',
                },
                {
                  name: 'Tony Galopagus',
                  id: '725',
                  type: '',
                },
                {
                  name: 'Slartivartian',
                  id: '797',
                  type: 'Slartivartian',
                },
                {
                  name: 'Ferkusian',
                  id: '798',
                  type: 'Ferkusian',
                },
                {
                  name: 'Morglutzian',
                  id: '799',
                  type: 'Morglutzian',
                },
              ],
              name: 'A Rickconvenient Mort',
              air_date: 'July 4, 2021',
              id: '44',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'President Curtis',
                  id: '347',
                  type: '',
                },
                {
                  name: 'Sticky',
                  id: '726',
                  type: 'Super Sperm Monster',
                },
                {
                  name: 'Professor Shabooboo',
                  id: '727',
                  type: '',
                },
                {
                  name: 'Sperm Queen',
                  id: '728',
                  type: 'Super Sperm Monster',
                },
                {
                  name: 'CHUD King',
                  id: '729',
                  type: 'CHUD',
                },
                {
                  name: 'Princess Ponietta',
                  id: '730',
                  type: 'CHUD',
                },
                {
                  name: 'Naruto Smith',
                  id: '731',
                  type: 'Giant Incest Baby',
                },
                {
                  name: 'Blazen',
                  id: '732',
                  type: '',
                },
                {
                  name: 'Kathy Ireland',
                  id: '733',
                  type: '',
                },
                {
                  name: 'Amazing Johnathan',
                  id: '734',
                  type: '',
                },
                {
                  name: 'Foal Sanchez',
                  id: '735',
                  type: 'CHUD Human Mix',
                },
                {
                  name: 'Spaceman',
                  id: '736',
                  type: '',
                },
                {
                  name: 'Cirque du Soleil Zumanity Member',
                  id: '737',
                  type: '',
                },
                {
                  name: 'Cirque du Soleil Zumanity Member',
                  id: '738',
                  type: '',
                },
                {
                  name: 'Cirque du Soleil Zumanity Member',
                  id: '739',
                  type: '',
                },
                {
                  name: 'Cirque du Soleil Zumanity Member',
                  id: '740',
                  type: '',
                },
                {
                  name: 'Cirque du Soleil Zumanity Member',
                  id: '741',
                  type: '',
                },
                {
                  name: "President's General",
                  id: '757',
                  type: '',
                },
              ],
              name: 'Rickdependence Spray',
              air_date: 'July 11, 2021',
              id: '45',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Brad',
                  id: '58',
                  type: '',
                },
                {
                  name: 'Tricia Lange',
                  id: '365',
                  type: '',
                },
                {
                  name: 'Bruce Chutback',
                  id: '742',
                  type: '',
                },
                {
                  name: 'Alyson Hannigan',
                  id: '743',
                  type: '',
                },
                {
                  name: 'Cenobite',
                  id: '744',
                  type: 'Demon',
                },
                {
                  name: 'Cenobite',
                  id: '745',
                  type: 'Demon',
                },
                {
                  name: 'Cenobite',
                  id: '746',
                  type: 'Demon',
                },
                {
                  name: 'Cenobite',
                  id: '747',
                  type: 'Demon',
                },
                {
                  name: 'Cenobite',
                  id: '748',
                  type: 'Demon',
                },
                {
                  name: 'Coat Rack Head',
                  id: '749',
                  type: 'Demon',
                },
                {
                  name: 'Mousetrap Nipples',
                  id: '750',
                  type: 'Demon',
                },
                {
                  name: 'Changeformer',
                  id: '751',
                  type: 'Changeformer',
                },
                {
                  name: 'Changeformer',
                  id: '752',
                  type: 'Changeformer',
                },
              ],
              name: 'Amortycan Grickfitti',
              air_date: 'July 18, 2021',
              id: '46',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'President Curtis',
                  id: '347',
                  type: '',
                },
                {
                  name: 'Space Cruiser',
                  id: '753',
                  type: 'Artificial Intelligence',
                },
                {
                  name: 'Coop',
                  id: '754',
                  type: '',
                },
                {
                  name: 'Dwayne',
                  id: '755',
                  type: '',
                },
                {
                  name: 'Franklin D. Roosevelt',
                  id: '756',
                  type: 'Guinea Pig for the Polio Vaccine',
                },
                {
                  name: "President's General",
                  id: '757',
                  type: '',
                },
                {
                  name: 'Giant Assassin Hidden in the Statue of Liberty',
                  id: '758',
                  type: '',
                },
                {
                  name: 'Turkey Morty',
                  id: '759',
                  type: 'Turkey',
                },
                {
                  name: 'Turkey Rick',
                  id: '760',
                  type: 'Turkey',
                },
                {
                  name: 'Turkey President Curtis',
                  id: '761',
                  type: 'Turkey',
                },
                {
                  name: 'Martínez',
                  id: '762',
                  type: 'Turkey',
                },
                {
                  name: 'Marvin',
                  id: '763',
                  type: '',
                },
                {
                  name: 'Jackey',
                  id: '764',
                  type: '',
                },
                {
                  name: 'Native Alien',
                  id: '765',
                  type: '',
                },
                {
                  name: 'Pilgrim Alien',
                  id: '766',
                  type: '',
                },
                {
                  name: 'President Turkey',
                  id: '767',
                  type: 'Turkey Human Mix',
                },
                {
                  name: 'Mary-Lou',
                  id: '768',
                  type: '',
                },
                {
                  name: 'Super Turkey',
                  id: '800',
                  type: 'Turkey Human Mix',
                },
              ],
              name: "Rick & Morty's Thanksploitation Spectacular",
              air_date: 'July 25, 2021',
              id: '47',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Lil B',
                  id: '203',
                  type: 'Snail alien',
                },
                {
                  name: 'Naruto Smith',
                  id: '731',
                  type: 'Giant Incest Baby',
                },
                {
                  name: 'Big Fat rick',
                  id: '769',
                  type: '',
                },
                {
                  name: 'Hothead Rick',
                  id: '770',
                  type: '',
                },
                {
                  name: 'Ricardo Montoya',
                  id: '771',
                  type: '',
                },
                {
                  name: 'Wrap-it-up Little Rick',
                  id: '772',
                  type: '',
                },
                {
                  name: 'Yo-yo Rick',
                  id: '773',
                  type: '',
                },
                {
                  name: 'Voiceoverian',
                  id: '774',
                  type: 'Parasite',
                },
                {
                  name: 'Voiceoverian',
                  id: '775',
                  type: 'Parasite',
                },
                {
                  name: 'Gotron Pilot',
                  id: '776',
                  type: 'Anime',
                },
                {
                  name: 'Gotron Pilot',
                  id: '777',
                  type: 'Anime',
                },
                {
                  name: 'Gotron Pilot',
                  id: '778',
                  type: 'Anime',
                },
                {
                  name: 'Samansky',
                  id: '794',
                  type: 'Normal Size Bug',
                },
                {
                  name: 'Palicki',
                  id: '795',
                  type: 'Normal Size Bug',
                },
                {
                  name: 'Sarge',
                  id: '796',
                  type: 'Normal Size Bug',
                },
                {
                  name: 'Gotron',
                  id: '821',
                  type: 'Ferret Robot',
                },
              ],
              name: 'Gotron Jerrysis Rickvangelion',
              air_date: 'August 1, 2021',
              id: '48',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Birdperson',
                  id: '47',
                  type: 'Bird-Person',
                },
                {
                  name: 'Gene',
                  id: '137',
                  type: '',
                },
                {
                  name: 'Phoenixperson',
                  id: '592',
                  type: 'Cyborg',
                },
                {
                  name: 'Young Memory Rick',
                  id: '779',
                  type: 'Memory',
                },
                {
                  name: 'Memory Tammy',
                  id: '780',
                  type: 'Memory',
                },
                {
                  name: "Rick's Garage",
                  id: '781',
                  type: 'Artificial Intelligence',
                },
                {
                  name: 'Memory Squanchy',
                  id: '782',
                  type: 'Memory',
                },
                {
                  name: 'Memory Rick',
                  id: '783',
                  type: 'Memory',
                },
                {
                  name: 'Memory Rick',
                  id: '784',
                  type: 'Memory',
                },
                {
                  name: 'Memory Geardude',
                  id: '785',
                  type: 'Memory',
                },
                {
                  name: "Birdperson & Tammy's Child",
                  id: '786',
                  type: 'Bird-Person Human Mix',
                },
              ],
              name: 'Rickternal Friendshine of the Spotless Mort',
              air_date: 'August 8, 2021',
              id: '49',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Two Crows',
                  id: '787',
                  type: 'Crow',
                },
                {
                  name: 'Mr. Cookie President',
                  id: '788',
                  type: 'Cookie',
                },
                {
                  name: 'Nick',
                  id: '789',
                  type: '',
                },
                {
                  name: 'Harold (Garbage Goober)',
                  id: '790',
                  type: '',
                },
                {
                  name: "Harold's Wife",
                  id: '791',
                  type: '',
                },
                {
                  name: 'Alien Crow',
                  id: '792',
                  type: 'Crow',
                },
                {
                  name: 'Alien Crow',
                  id: '793',
                  type: 'Crow',
                },
              ],
              name: 'Forgetting Sarick Mortshall',
              air_date: 'September 5, 2021',
              id: '50',
            },
            {
              characters: [
                {
                  name: 'Rick Sanchez',
                  id: '1',
                  type: '',
                },
                {
                  name: 'Morty Smith',
                  id: '2',
                  type: '',
                },
                {
                  name: 'Summer Smith',
                  id: '3',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '4',
                  type: '',
                },
                {
                  name: 'Jerry Smith',
                  id: '5',
                  type: '',
                },
                {
                  name: 'Beth Smith',
                  id: '38',
                  type: '',
                },
                {
                  name: 'Birdperson',
                  id: '47',
                  type: 'Bird-Person',
                },
                {
                  name: 'Diane Sanchez',
                  id: '94',
                  type: '',
                },
                {
                  name: 'Evil Morty',
                  id: '118',
                  type: '',
                },
                {
                  name: 'Maximums Rickimus',
                  id: '215',
                  type: '',
                },
                {
                  name: 'Mr. Poopybutthole',
                  id: '244',
                  type: '',
                },
                {
                  name: 'Quantum Rick',
                  id: '274',
                  type: '',
                },
                {
                  name: 'Rick Prime',
                  id: '285',
                  type: '',
                },
                {
                  name: 'Ricktiminus Sancheziminius',
                  id: '294',
                  type: '',
                },
                {
                  name: 'Unknown Rick',
                  id: '380',
                  type: '',
                },
                {
                  name: 'Zeta Alpha Rick',
                  id: '389',
                  type: '',
                },
                {
                  name: 'Bearded Morty',
                  id: '392',
                  type: '',
                },
                {
                  name: 'Two Crows',
                  id: '787',
                  type: 'Crow',
                },
                {
                  name: '7+7 Years Old Morty',
                  id: '801',
                  type: '',
                },
                {
                  name: '26 Years Old Morty',
                  id: '802',
                  type: '',
                },
                {
                  name: '40 Years Old Morty',
                  id: '803',
                  type: '',
                },
                {
                  name: 'Andy',
                  id: '804',
                  type: 'Mascot',
                },
                {
                  name: 'Baby Mouse Skin Morty',
                  id: '805',
                  type: '',
                },
                {
                  name: 'Metaphor for Capitalism',
                  id: '806',
                  type: '',
                },
                {
                  name: 'Beth Sanchez',
                  id: '807',
                  type: '',
                },
                {
                  name: 'Crow Scare',
                  id: '808',
                  type: 'Scarecrow',
                },
                {
                  name: 'Pussifer',
                  id: '809',
                  type: 'Tiger',
                },
                {
                  name: 'Stan Lee Rick',
                  id: '810',
                  type: '',
                },
                {
                  name: 'Re-Build-a-Morty Morty',
                  id: '811',
                  type: '',
                },
                {
                  name: 'Deformed Morty',
                  id: '812',
                  type: '',
                },
                {
                  name: 'Crow Horse',
                  id: '813',
                  type: 'Crow Horse',
                },
                {
                  name: 'Bald Rick',
                  id: '814',
                  type: '',
                },
                {
                  name: 'Punk Rick',
                  id: '815',
                  type: '',
                },
                {
                  name: 'Party Rick',
                  id: '816',
                  type: '',
                },
                {
                  name: 'Scar Rick',
                  id: '817',
                  type: '',
                },
                {
                  name: 'Long Hair Rick',
                  id: '818',
                  type: '',
                },
                {
                  name: 'Redhead Rick',
                  id: '819',
                  type: '',
                },
                {
                  name: 'Redhead Morty',
                  id: '820',
                  type: '',
                },
                {
                  name: 'Young Jerry',
                  id: '822',
                  type: '',
                },
                {
                  name: 'Young Beth',
                  id: '823',
                  type: '',
                },
                {
                  name: 'Young Beth',
                  id: '824',
                  type: '',
                },
                {
                  name: 'Young Jerry',
                  id: '825',
                  type: '',
                },
              ],
              name: 'Rickmurai Jack',
              air_date: 'September 5, 2021',
              id: '51',
            },
          ],
          name: 'Rick Sanchez',
          status: 'Alive',
          id: '1',
        },
      }),
    )
  }),
]
export default handlers
