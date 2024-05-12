import { DonationCategories, MedicalSuppliesTypes, SchoolTypes, FoodTypes } from "./types";

export const DONATION_CARDS_DATA = [

    {

        title: "Jackets",
        text: "Mersal is looking for jackets for kids",
        age: "7-12",
        gender: "Female",
        season: "Winter",
        material: "Leather",
        quantity: "18",
        progress: 45,
        category: DonationCategories.Clothes,
        image: "https://nypost.com/wp-content/uploads/sites/2/2021/10/best-kids-winter-coats.jpg?quality=80&strip=all&w=744",
    },
   
    {
        title: "Fresh Meals",
        text: "Awlady orphanage needs fresh meals",
        quantity: "100",
        progress: 55,
        category: DonationCategories.Food,
        type: FoodTypes.freshMeals,
        image:"https://az727718.vo.msecnd.net/75f28e2721eb4488b6b368de202c4603/images/ff89fcf94bc94fdd972a685833839d3a_2048w.jpg",
    },

    {
        title: "Toys",
        text: "Resala wants some stuffed toys for the kids",
        age: "3-7",
        gender: "Unisex",
        type: "Stuffed Toys",
        image: "https://th.bing.com/th/id/R.3810df8f4097b6df38cd134cbd723776?rik=l%2fU3M4E7pkhLwg&riu=http%3a%2f%2fi.ebayimg.com%2f00%2fs%2fNTY2WDg0OA%3d%3d%2fz%2foagAAOSwe-FU%7eFiO%2f%24_32.JPG%3fset_id%3d880000500F&ehk=32e5bEkXE%2fUdCBcq1byA8VsN0NMsliF3i3wl0aEmOwY%3d&risl=&pid=ImgRaw&r=0",
        quantity: "30",
        progress: 40,
        category: DonationCategories.Toys,
    },
    {

        title: "Shirts",
        text: "Dar EL Orman needs Tshirts for boys ages 1-5",
        age: "1-5",
        gender: "Male",
        season: "Summer",
        material: "Cotton",
        quantity: "60",
        progress: 45,
        category: DonationCategories.Clothes,
        image: "https://cdn-az.allevents.in/events9/banners/d90070eb23ffe435e9795fe2c107dea2ebab3b31d856a370a1a75cf774108b10-rimg-w525-h350-gmir.jpg?v=1563940495",
    },
   
    {
        title: "Medical Devices",
        text: "57357 Hospital needs an X-Ray machine for our hospital",
        use:'To capture X-Ray images of our patients for correct diagnosis',
        quantity: 1,
        progress: 0,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.MedicalDevices,
        image: "https://welpmagazine.com/wp-content/uploads/2020/08/Medical-Devices-scaled-1.jpeg",
    },
    {
        title: "Fruits and Vegetables",
        text: "Mersal need various types of fruits and vegetables for children",
        quantity: "20 kg",
        progress: 65,
        type: FoodTypes.FruitsVegetables,
        category: DonationCategories.Food,
        image: "https://th.bing.com/th/id/OIP.ID08aWE8X3K1HFzczAdh3wHaDt?rs=1&pid=ImgDetMain",
    },
    {
        title: "Medical Equipment",
        text: "Al Nas Hospital wants syringes and masks",
        use:"To use during medical procedures for infection control",
        quantity: 100,
        progress: 0,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.MedicalEquipment,
        image: "https://thumbs.dreamstime.com/b/doctor-hand-hold-syringe-blue-glove-injection-yellow-vaccine-concept-medical-injector-science-test-close-up-health-care-202149815.jpg"
    },
    
    {
        title: "Antibiotics",
        text: "57357 hospital needs antibiotics for our pneumonia patients",
        use: "To treat our patients from bacterial pneumonia in their lungs",
        quantity: '20 boxes',
        progress: 50,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.Medication,
        medicationValue: "Respiratory",
        image:"https://microbiologyinfo.com/wp-content/uploads/2018/10/featured-antibiotics-guide.jpg"
    },
    {
        title: "Type A+ Blood",
        text: "a Patient in Air Force Specialized Hospital is in urgent need for 2 bags of blood",
        patientName:"Abdullah Ahmed",
        blood:'A+ or O+',
        hospitalAddress: "2C9M+2M2، EL, N Teseen St, Cairo Governorate",
        hospitalName: "Air Force Specialized Hospital",
        governorate: "Cairo",
        area: "New Cairo",
        progress: 50,
        category: DonationCategories.BloodDonations,
        image:"https://th.bing.com/th/id/R.145447e11d13dc04f69f913537262d3a?rik=XRFF2sAAH5S3wQ&pid=ImgRaw&r=0",
    },
    {
        title: "Arabic School books",
        text: "Sanad orphanage wants Arabic selah el telmeez to help 6th grade students",
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
    },
    {
        title: "Cars",
        text: "Resala wants to give the kids car toys",
        age: "3-10",
        gender: "Boys",
        type: "Cars",
        image: "https://m.media-amazon.com/images/I/812iEIDPaqL._AC_SL1500_.jpg",
        quantity: "10",
        progress: 40,
        category: DonationCategories.Toys,
    },
    {
        title: "School Stationary",
        text: "Awlady orphanage is looking for pencils for kids in the orphanage",
        quantity: '200',
        stationaryType: 'pencils',
        progress: 60,
        type: SchoolTypes.SchoolStationary,
        category: DonationCategories.SchoolSupplies,
        image:"https://media.list.ly/production/259613/1843391/item1843391_600px.jpeg?ver=2253155476"
    },
   
    {
        title: "Heart Medication",
        text: "a patient in Al Nas Hospital needs statin urgently",
        use: "To lower our patient's risk of heart-stroke by lowering his cholesterol levels",
        quantity: '5 Boxes',
        progress: 0,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.Medication,
        medicationValue: "Heart",
        image:"https://www.2gb.com/wp-content/uploads/sites/2/2018/02/Satin-2GB.jpg",
    },
    {
        title: "Type O+ Blood",
        text: "a Patient in Magdy Yacoub Hospital is in urgent need for 4 bags of blood",
        patientName:"Reham Amer",
        blood:'O',
        hospitalAddress: "El-Demerdash, El Weili, Cairo Governorate 4390042",
        hospitalName: "Magdy Yacoub",
        governorate: "Cairo",
        area: "Nasr City",
        progress: 20,
        category: DonationCategories.BloodDonations,
        image:"https://th.bing.com/th/id/R.145447e11d13dc04f69f913537262d3a?rik=XRFF2sAAH5S3wQ&pid=ImgRaw&r=0"
    },
    {
        title: "Baked Goods",
        text: "Mersal needs various types of fresh baked goods",
        quantity: "60",
        progress: 10,
        type: FoodTypes.BakedGoods,
        category: DonationCategories.Food,
        image: "https://th.bing.com/th/id/R.2b20af224afffeb64c917ea71d438368?rik=rNI4%2fyODZwODFg&riu=http%3a%2f%2fi.ebayimg.com%2f00%2fs%2fNTIwWDgwMA%3d%3d%2fz%2faTUAAOSwd4tT2amN%2f%24_3.JPG%3fset_id%3d2&ehk=GtUdOt1y5xFE4RvXTiwYJAfWfvXHIBzKCjt4RT9aV7s%3d&risl=&pid=ImgRaw&r=0",
    },
    
]