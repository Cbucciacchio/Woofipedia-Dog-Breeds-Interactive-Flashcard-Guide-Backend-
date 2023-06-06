import { Controller, Get } from '@nestjs/common';

@Controller('breed')
export class BreedController {
  @Get()
  findAll(): any[] {
    // Return a hardcoded array of each breed + pictures 
    return [
      {
        name: 'Akita',
        description: 'The Akita is distinctive large and powerful dog with an aloof attitude.  The Akita can be territorial and the dog is not usually welcoming of strangers.',
        imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/akita-700x700.jpg',
        growthImages: [
          'https://www.akc.org/wp-content/uploads/2020/11/Japanese-Akitainu-puppy-playing-in-the-grass.jpg',
          'https://www.petindiaonline.com/story_images/189_akita.JPG',
          'https://www.dogzone.com/images/breeds/akita-inu-800.jpg'
        ]
      },
  
      {
          name: 'Alaskan Husky',
          description: 'Suited for hands-on, energetic and experienced owners, the Alaskan Husky has high needs for exercise and food. Born to be a sled dog who runs regularly over long distances while pulling a load, he has an innate endurance and stamina for which he requires an outlet.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_15250126-Alaskan-Husky-in-front-of-white-background-thumbnail.jpg',
          growthImages: [
            'https://www.allthingsdogs.com/wp-content/uploads/2019/09/Alaskan-Husky-Puppy.jpg',
            'https://mypetworld.in/wp-content/uploads/2018/08/626231362-612x612.jpg',
            'https://c4.wallpaperflare.com/wallpaper/398/881/280/husky-dog-hill-snow-wallpaper-preview.jpg'
          ]
        },
        {
          name: 'Airedale Terrier',
          description: 'The Airedale Terrier is the largest of all terrier breeds. The breed is tall and sturdy with a muscular body and covered in a thick, course coat of fur.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/airedale-terrier-700x700.jpg',
          growthImages: [
            'https://img.dog-learn.com/dog-breeds/airedale-terrier/airedale-terrier-puppy-i20-sz3.jpg',
            'https://nosamisleschiens.fr/wp-content/uploads/2016/11/Terrier-Airedale.jpg',
            "https://www.omlet.co.uk/images/cache/1024/682/Dog-Airedale_Terrier-An_Airedale_Terrier_standing_tall,_awaiting_a_command_from_it's_owner.jpg"
          ]
        },
        {
          name: 'American Bulldog',
          description: 'American Bulldogs are are strong, stocky dogs that look tough but have have a gentle and sensitive nature. They are friendly, affectionate and make great watch dogs.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/11/american-bulldog-700x700.jpg',
          growthImages: [
            'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2023-01/Hero%20American%20Bulldog%202.jpg',
            'https://www.akc.org/wp-content/uploads/2020/01/American-Bulldog-puppy-walking-in-the-grass.jpg',
            'https://media-be.chewy.com/wp-content/uploads/2021/05/11155906/American-bulldog-184757473-969x615.jpg'
          ]
        },
        {
          name: 'American Foxhound',
          description: 'The American Foxhound is, as its name suggests, a hunting dog bred in the USA to hunt foxes and other game. A scenting pack hound, she has tremendous hunting instincts, a keen sense of smell and great energy to run effortlessly for many hours on the chase.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2021/02/shutterstock_1444833281-American-Foxhound-in-a-public-park-thumbnail-Bow-Wow-Meow-Pet-Insurance.jpg',
          growthImages: [
            'https://doglime.com/wp-content/uploads/2019/02/American-foxhound-puppy.jpg',
            'https://doglime.com/wp-content/uploads/2019/12/American-Foxhound-Puppy-Developmetal-Stages.jpg',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F08%2F05%2Famerican-foxhound-sitting-in-a-park-1160585391.jpg'
          ]
        },
        {
          name: 'Australian Kelpie',
          description: 'Kelpies are intelligent, active and energetic medium size dogs that are popular working dogs on Australian farms. They are intensely loyal and tireless workers that always need a job to do. They make great family dogs as long as they receive lots of physical and mental stimulation.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/australian-kelpie-isolated-thumb-700x700.jpg',
          growthImages: [
            'https://www.purina.com.au/-/media/project/purina/main/breeds/puppies/puppy-kelpie.jpg',
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=460,height=600,fit=cover/animal/breed/pictures/6144b9af9cebc034170277.jpg',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F10%2Faustralian-kelpie-tongue-fence-471664104.jpg'
          ]
        },
        {
          name: 'Australian Shepherd',
          description: 'Australian Shepherds are medium size dogs with a huge amount of energy and drive. This breed is ideal for an active family because they love plenty of exercise and most of all they love to work.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/06/australian-shepherd-700x700.jpg',
          growthImages: [
            'https://www.perfectdogbreeds.com/wp-content/uploads/2020/06/Australian-Shepherd-Puppy.jpg',
            'https://i.redd.it/vgzd5i1bp9f31.jpg',
            'https://www.akc.org/wp-content/uploads/2017/11/Australian-Shepherd.1.jpg'
          ]
        },
        {
          name: 'Bernese Mountain Dog',
          description: 'The Bernese Mountain Dog is a larger breed of dog with a tri-coloured thick double coat. This dog makes the ideal family pet as it has a great temperament and just loves to be around children and whatever else is happening.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/shutterstock_76839838-feature.jpg',
          growthImages: [
            'https://i.pinimg.com/736x/28/91/e4/2891e4c7b060740300a8fd484b5f3b8d.jpg',
            'https://i.pinimg.com/originals/86/b4/a4/86b4a42f10071dc9cafa307a39bb2f29.jpg',
            'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Bernese%20Mountain%20Dog1.jpg'
          ]
        },
        {
          name: 'Bichon Frise',
          description: 'The Bichon Frise (or simply “Bichon”) is a small, sturdy dog famous for its curly, fluffy white coat. They were popular in France as performing dogs and companion dogs.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/bichon-frise-700x700.jpg',
          growthImages: [
            'https://www.veterinarians.org/wp-content/uploads/2022/10/All-You-Need-to-Know-About-Your-Bichon-Frise-Puppy.jpg',
            'https://eyams5v2mpc.exactdn.com/wp-content/uploads/2020/09/Bichon-fris%C3%A9-photo-1587539975099-5aecb74902d4.jpg',
            'https://www.hepper.com/wp-content/uploads/2021/11/bichon-frise_Vladimir-Nenezic_shutterstock-scaled-1.jpg'
          ]
        },
        {
          name: 'Boerboel',
          description: 'The Boerboel is a very large, strong and muscular domesticated working dog. Loyal to a fault, the Boerboel is a tough breed that was developed to guard the homestead in hard African conditions.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/boerboel-700x700.jpg',
          growthImages: [
            'https://netstorage-briefly.akamaized.net/images/e5043d6970dadc43.jpg',
            'https://www.allthingsdogs.com/wp-content/uploads/2019/06/Boerboel-Sitting.jpg',
            'https://www.hundeo.com/wp-content/uploads/2019/07/Boerboel.jpg'
          ]
        },
        {
          name: 'Border Collie',
          description: 'Border Collies are extremely smart and energetic medium size working dogs that require considerable physical and mental stimulation. Due to their great looks, warm face and intelligence, they have become popular family pets.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/border-collie-700x700-1.jpg',
          growthImages: [
            'https://i.pinimg.com/originals/97/f6/46/97f64614927328325cf385c8be8aa80b.jpg',
            'https://iheartdogs.com/wp-content/uploads/2023/03/dog-ga3bc77f1a_1280.jpg',
            'https://media-be.chewy.com/wp-content/uploads/2021/04/15160416/Border-Collie_Featured-Image-1024x615.jpg'
          ]
        },
        {
          name: 'Boston Terrier',
          description: 'The Boston Terrier is an American breed of domesticated dog, small to medium-sized with a muscular and heavy-set appearance similar to the English terrier breeds. ',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/boston-terrier-700x700.jpg',
          growthImages: [
            'https://assets.wagwalkingweb.com/media/original_images/how-to-prepare-for-a-boston-terrier-puppy-create-a-schedule.jpg',
            'https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2022/11/Boston-Terrier-Dog-Breed-Feature-Image.jpg',
            'https://cdn.britannica.com/84/236684-050-B1FCC3FA/brindle-Boston-Terrier-dog.jpg'
          ]
        },
        {
          name: 'Bull Terrier',
          description: 'Bull Terriers are mischievous, playful and endearing large-size dogs who are devoted to their family. They are strong, stubborn and independent dogs who are best handled by an experienced owner.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/bullmastiff-700x700-1.jpg',
          growthImages: [
            'https://i.pinimg.com/originals/c4/24/0d/c4240dd9b2e1285a4d13798126f3e63c.jpg',
            'https://i2-prod.mirror.co.uk/incoming/article29408584.ece/ALTERNATES/s615b/0_English-Bull-Terrier-On-Grassy-Field.jpg',
            'https://t1.ea.ltmcdn.com/en/posts/5/4/9/tips_to_train_a_bull_terrier_945_orig.jpg'
          ]
        },
        {
          name: 'Cane Corso',
          description: 'Cane Corsos are powerful and energetic large-size dogs with a protective nature. Smart, assertive and confident, they are best suited to experienced owners and large, rural properties.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/cane-corso-700x700.jpg',
          growthImages: [
            'https://i.pinimg.com/736x/b4/b8/7c/b4b87cfc25ae05ec5f06574f17beea61.jpg',
            'https://www.zooplus.co.uk/magazine/wp-content/uploads/2021/09/Cane-Corso-1536x1025.jpg',
            'https://pawleaks.com/wp-content/uploads/2020/04/cane-corso-behavior-stages-scaled.jpg'
          ]
        },
        {
          name: 'Cavalier King Charles Spaniel',
          description: 'The Cavalier King Charles Spaniel is a small dog equipped with long floppy ears, short and stubby nose, a moderately long coat and a well-feathered chest and tail. The breed comes in a variety of colours, including black and tan, red and white (known as Blenheim) and a mahogany red.',
          imageUrl: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/cavalier-king-charles-spaniel-700x700.jpg',
          growthImages: [
            'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk0OTAxODYyMDkxNDY1ODkw/5-things-you-should-know-before-owning-a-cavalier-king-charles-spaniel.jpg',
            'https://media-be.chewy.com/wp-content/uploads/2021/06/02112758/Cavalier-King-Charles-Spaniel-FeaturedImage.jpg',
            'https://www.akc.org/wp-content/uploads/2017/11/Cavalier-King-Charles-Spaniel-standing-in-the-grass.jpg'
          ]
        },
    ];
  }
}
