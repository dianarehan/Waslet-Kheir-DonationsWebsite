import { DonationCategories, MedicalSuppliesTypes, SchoolTypes, FoodTypes } from "./types";

export const DONATION_CARDS_DATA = [

    {
        title: "Jackets",
        orgName:"Mersal",
        text: ' is looking for jackets for kids',
        age: "7-12",
        gender: "Female",
        season: "Winter",
        material: "Leather",
        quantity: "18",
        progress: 45,
        category: DonationCategories.Clothes,
        image: "https://nypost.com/wp-content/uploads/sites/2/2021/10/best-kids-winter-coats.jpg?quality=80&strip=all&w=744",
        orgPic: "https://arab.org/wp-content/uploads/2019/05/mersal-foundation.jpg",

    },
    {
        title: "Fresh Meals",
        orgName:"Awlady Orphanage",
        text: " needs fresh meals",
        quantity: "100",
        progress: 55,
        category: DonationCategories.Food,
        type: FoodTypes.freshMeals,
        image:"https://az727718.vo.msecnd.net/75f28e2721eb4488b6b368de202c4603/images/ff89fcf94bc94fdd972a685833839d3a_2048w.jpg",
        orgPic:"https://img1.wsimg.com/isteam/ip/298cb803-7078-4032-b25d-88a8bd8d08d0/Awlady%20logo%20wider-0001.jpg/:/rs=h:1000,cg:true,m",

    },

    {
        title: "Toys",
        orgName: "Resala",
        text: " wants some stuffed toys for the kids",
        age: "3-7",
        gender: "Unisex",
        type: "Stuffed Toys",
        image: "https://th.bing.com/th/id/R.3810df8f4097b6df38cd134cbd723776?rik=l%2fU3M4E7pkhLwg&riu=http%3a%2f%2fi.ebayimg.com%2f00%2fs%2fNTY2WDg0OA%3d%3d%2fz%2foagAAOSwe-FU%7eFiO%2f%24_32.JPG%3fset_id%3d880000500F&ehk=32e5bEkXE%2fUdCBcq1byA8VsN0NMsliF3i3wl0aEmOwY%3d&risl=&pid=ImgRaw&r=0",
        quantity: "30",
        progress: 40,
        category: DonationCategories.Toys,
        orgPic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiBx2s6hdvg0n3f0Bs3CuTK1Ty4MayooAzd5oJivQvw&s",

    },
    {
        title: "Type A+ Blood",
        hospitalName:"Al Nas Hospital",
        orgName:"Al Nas Hospital",
        text: " is in a urgent need for 4 bags of blood for a patient",
        patientName:"Abdullah Ahmed",
        blood:'A+ or O+',
        hospitalAddress: "Shubra Al Kheimah, Shubra El Kheima 1, Al-Qalyubia Governorate 6210120",
        governorate: "Al-Qalyubia",
        area: "Shubra Al Kheimah",
        progress: 50,
        category: DonationCategories.BloodDonations,
        image:"https://th.bing.com/th/id/R.145447e11d13dc04f69f913537262d3a?rik=XRFF2sAAH5S3wQ&pid=ImgRaw&r=0",
        orgPic: "https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/59839023_1293661097452058_3538026430166204416_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHzlB3falxPrzG9FfjIirlr5h1v8AJNX7HmHW_wAk1fsZsqR8MWu-B2NIsN3Jbpg2SZhCGNNP8efSNCnf1e0RD9&_nc_ohc=xCGmW64URg0Q7kNvgEfb9Ge&_nc_ht=scontent.fcai19-7.fna&oh=00_AfAew-pa1ajyJ8Q-0nK5FDUaJb2I8y-ZmXr9_YyievcXyA&oe=66642648",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.471952259606!2d31.250278075491725!3d30.10930591549473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841fd0f98ffeb%3A0xad8c4bf7c6349f96!2sAl%20Nas%20Hospital!5e0!3m2!1sen!2seg!4v1715254398437!5m2!1sen!2seg"
    },
    
    {

        title: "Shirts",
        orgName:"Dar EL Orman",
        text: ' needs Tshirts for boys in age group 1-5 years old',
        age: "1-5",
        gender: "Male",
        season: "Summer",
        material: "Cotton",
        quantity: "60",
        progress: 45,
        category: DonationCategories.Clothes,
        image: "https://cdn-az.allevents.in/events9/banners/d90070eb23ffe435e9795fe2c107dea2ebab3b31d856a370a1a75cf774108b10-rimg-w525-h350-gmir.jpg?v=1563940495",
        orgPic:  "https://www.dar-alorman.com/imgs/ormanb-logo.png",

    },
   
    {
        title: "Medical Devices",
        orgName:"57357 Hospital",
        text: " needs an X-Ray machine for the hospital",
        use:'To capture X-Ray images of their patients for correct diagnosis',
        quantity: 1,
        progress: 0,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.MedicalDevices,
        image: "https://welpmagazine.com/wp-content/uploads/2020/08/Medical-Devices-scaled-1.jpeg",
        orgPic:  "https://biotech.nu.edu.eg/sites/bs.nu.edu/files/2022-05/57357.png",

    },
    {
        title: "Fruits and Vegetables",
        orgName:"Mersal",
        text: " need various types of fruits and vegetables for children",
        quantity: "20 kg",
        progress: 65,
        type: FoodTypes.FruitsVegetables,
        category: DonationCategories.Food,
        image: "https://th.bing.com/th/id/OIP.ID08aWE8X3K1HFzczAdh3wHaDt?rs=1&pid=ImgDetMain",
        orgPic: "https://arab.org/wp-content/uploads/2019/05/mersal-foundation.jpg",
    },
    {
        title: "Medical Equipment",
        orgName:"Al Nas Hospital",
        text: " wants some quantity of syringes and masks",
        use:"To use during medical procedures for infection control",
        quantity: 100,
        progress: 0,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.MedicalEquipment,
        image: "https://thumbs.dreamstime.com/b/doctor-hand-hold-syringe-blue-glove-injection-yellow-vaccine-concept-medical-injector-science-test-close-up-health-care-202149815.jpg",
        orgPic:"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/59839023_1293661097452058_3538026430166204416_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHzlB3falxPrzG9FfjIirlr5h1v8AJNX7HmHW_wAk1fsZsqR8MWu-B2NIsN3Jbpg2SZhCGNNP8efSNCnf1e0RD9&_nc_ohc=xCGmW64URg0Q7kNvgEfb9Ge&_nc_ht=scontent.fcai19-7.fna&oh=00_AfAew-pa1ajyJ8Q-0nK5FDUaJb2I8y-ZmXr9_YyievcXyA&oe=66642648",

    },
    
    {
        title: "Antibiotics",
        orgName:"57357 hospital",
        text: " needs antibiotics for their pneumonia patients",
        use: "To treat their patients from bacterial pneumonia in their lungs",
        quantity: '20 boxes',
        progress: 50,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.Medication,
        medicationValue: "Respiratory",
        image:"https://microbiologyinfo.com/wp-content/uploads/2018/10/featured-antibiotics-guide.jpg",
        orgPic:  "https://biotech.nu.edu.eg/sites/bs.nu.edu/files/2022-05/57357.png",
    },
   
    {
        title: "Arabic School books",
        orgName:"Sanad orphanage",
        text: " wants Arabic selah el telmeez to help 6th grade students",
        bookName: 'Selah el Telmeez',
        author: 'Mr. Hamdy Mostafa',
        language: 'Arabic',
        edition: '2024',
        summary: 'An educational book that helps 6th graders understand their arabic language better',
        quantity:"40",
        progress: 30,
        type: SchoolTypes.SchoolBooks,
        category: DonationCategories.SchoolSupplies,
        quantity:"30",
        image:"https://1.bp.blogspot.com/-cYb5-l59__A/Xj3TVYyIIfI/AAAAAAAACFk/1KdlhAoBOKQfKyzxgAeIxypPH1QsAhEDQCLcBGAsYHQ/s1600/%25D8%25A7%25D9%2584.JPG",
        orgPic:"https://sanadorphans.org/storage/settings/January2024/vMGNGY5ZMqNBl1luAdiF.png",

    },
    {
        title: "Cars",
        text: " wants to give the kids car toys",
        orgName:"Resala",
        age: "3-10",
        gender: "Boys",
        type: "Cars",
        image: "https://m.media-amazon.com/images/I/812iEIDPaqL._AC_SL1500_.jpg",
        quantity: "10",
        progress: 40,
        category: DonationCategories.Toys,
        orgPic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiBx2s6hdvg0n3f0Bs3CuTK1Ty4MayooAzd5oJivQvw&s",
    },
    {
        title: "School Stationary",
        orgName:"Awlady Orphanage",
        text: " is requesting coloring pencils for kids for art sessions",
        quantity: '200',
        stationaryType: 'pencils',
        progress: 60,
        type: SchoolTypes.SchoolStationary,
        category: DonationCategories.SchoolSupplies,
        image:"https://media.list.ly/production/259613/1843391/item1843391_600px.jpeg?ver=2253155476",
        orgPic:"https://img1.wsimg.com/isteam/ip/298cb803-7078-4032-b25d-88a8bd8d08d0/Awlady%20logo%20wider-0001.jpg/:/rs=h:1000,cg:true,m",
    },
   
    {
        title: "Heart Medication",
        hospitalName:"Al Nas Hospital",
        orgName:"Al Nas Hospital",
        text: " needs statin urgently for patients",
        use: "To lower our patient's risk of heart-stroke by lowering his cholesterol levels",
        quantity: '5 Boxes',
        progress: 0,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.Medication,
        medicationValue: "Heart",
        image:"https://www.2gb.com/wp-content/uploads/sites/2/2018/02/Satin-2GB.jpg",
        orgPic:"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/59839023_1293661097452058_3538026430166204416_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHzlB3falxPrzG9FfjIirlr5h1v8AJNX7HmHW_wAk1fsZsqR8MWu-B2NIsN3Jbpg2SZhCGNNP8efSNCnf1e0RD9&_nc_ohc=xCGmW64URg0Q7kNvgEfb9Ge&_nc_ht=scontent.fcai19-7.fna&oh=00_AfAew-pa1ajyJ8Q-0nK5FDUaJb2I8y-ZmXr9_YyievcXyA&oe=66642648",
    },
    {
        title: "Type O+ Blood",
        text: " is in a urgent need for 6 bags of blood for a patient",
        patientName:"Reham Amer",
        blood:'O',
        hospitalAddress: "El Weili, Cairo Governorate 4390042",
        hospitalName: "Magdy Yacoub",
        orgName: "Magdy Yacoub",
        governorate: "Cairo",
        area: "Nasr City",
        progress: 20,
        category: DonationCategories.BloodDonations,
        image:"https://th.bing.com/th/id/R.145447e11d13dc04f69f913537262d3a?rik=XRFF2sAAH5S3wQ&pid=ImgRaw&r=0",
        orgPic:"https://www.myf-egypt.org/img/logo.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1725425080344!2d31.22189247549012!3d30.06058831780579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458411d812781bf%3A0x530844b6182c818!2zTWFnZGkgWWFjb3ViIEhlYXJ0IEZvdW5kYXRpb24g2YXYpNiz2LPYqSDZhdis2K_ZiSDZiti52YLZiNioINmE2YTZgtmE2Kg!5e0!3m2!1sen!2seg!4v1715253733123!5m2!1sen!2seg"


    },
    {
        title: "Baked Goods",
        orgName:"Mersal",
        text: " needs various types of fresh baked goods",
        quantity: "60",
        progress: 10,
        type: FoodTypes.BakedGoods,
        category: DonationCategories.Food,
        image: "https://th.bing.com/th/id/R.2b20af224afffeb64c917ea71d438368?rik=rNI4%2fyODZwODFg&riu=http%3a%2f%2fi.ebayimg.com%2f00%2fs%2fNTIwWDgwMA%3d%3d%2fz%2faTUAAOSwd4tT2amN%2f%24_3.JPG%3fset_id%3d2&ehk=GtUdOt1y5xFE4RvXTiwYJAfWfvXHIBzKCjt4RT9aV7s%3d&risl=&pid=ImgRaw&r=0",
        orgPic: "https://arab.org/wp-content/uploads/2019/05/mersal-foundation.jpg",
    },
    
]