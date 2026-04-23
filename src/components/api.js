const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGMyMzJlNThiNWZjOTBiNzY3ZmFlZDNhNDMzZTJhNiIsIm5iZiI6MTc3NTU3Njc4Ny44ODIsInN1YiI6IjY5ZDUyNmQzNTczMzBiOTAzZDZhZTQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJGztWaMeJ2SwJD661e6DZczKYDPzcbHVuw2xs3cKxU"

const options = {
     headers: {
    "Authorization": `Bearer ${API_KEY}`,
    "accept":"application/json"
  }
}
export async function DiscoverMovies(page) {

         const response = await fetch(`${BASE_URL}discover/movie?language=en-US&page=${page}`,
            options
         )
         const ExploreData = await response.json()
         return ExploreData
         console.log(page);
}
export async function TopRated(page) {
    const response = await fetch(`${BASE_URL}movie/top_rated?language=en-US&page=${page}'`,
        options
    )
    const TopRated = await response.json()
    return TopRated
}
export async function Trending(page) {
    const response = await fetch(`${BASE_URL}trending/all/day?language=en-US&page=${page}` ,  options
    )
    const Trending = await response.json()
    return Trending
}

export async function Searched(SearchInput,page) {
    const response = await fetch(`${BASE_URL}search/movie?query=${SearchInput}&include_adult=false&language=en-US&page=${page}` ,  options
    )
    const search = await response.json()
    return search
}
export async function MovieDetails(id){
    const response = await fetch(`${BASE_URL}movie/${id}`, options)
    const MovieDetail = await response.json()
    return MovieDetail;
}
export async function RelatedMovies(id){
    const response = await fetch(`${BASE_URL}movie/${id}/similar?language=en-US&page=1`, options)
    const MovieDetail = await response.json()
    return MovieDetail;
}
export async function MovieReviews(id){
    const response = await fetch(`${BASE_URL}movie/${id}/reviews?language=en-US&page=1`, options)
    const reviews = await response.json()
    console.log(reviews);
    
    return reviews;
}
export async function MovieRecommond(id){
    const response = await fetch(`${BASE_URL}movie/${id}/recommendations?language=en-US&page=1`, options)
    const reviews = await response.json()
    console.log(reviews);
    
    return reviews;
}
export async function genre(){
    const response = await fetch(`${BASE_URL}genre/movie/list?language=en`, options)
    const genre = await response.json()
    return genre;
}
export async function genre1(){
    const response = await fetch(`${BASE_URL}genre/movie?language=en`, options)
    const gen = await response.json()
    console.log(gen);
    return gen;
}

export async function Discovergenre(id,PageNo) {

    const response = await fetch(`${BASE_URL}discover/movie?&with_genres=${id}&language=en-US&page=${PageNo}`,
       options
    )
    const discovergenre = await response.json()
    return discovergenre
    console.log(discovergenre);
}