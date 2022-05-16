// import axios from 'axios'

export async function getRoutesFromApi(startCity, destination) {
    // const baseURL = "http://localhost:8080/booking/"
    // let incoming = await axios.post(baseURL, { startCity, destination })
    const incoming = [{ "_id": "1", "companyName": "10 AM Travels", "startCity": "Lahore", "destination": "Islamabad", "pricePerSeat": "1500" },
        // {"_id":"2","companyName":"12PM Travels","startCity":"Multan" , "destination":"Islamabad","pricePerSeat":"2500"}
    ];
    return incoming
}