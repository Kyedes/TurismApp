/**
 * Created by Esben on 23/09/2015.
 */
angular.module('starter.dummyData', [])

    .factory('GeoList', function () {

        var geolist =

                [
                    {monument: "The Little Mermaid", description:"The statue was commissioned in 1909 by Carl Jacobsen, son of the founder of Carlsberg, after he had been fascinated by a ballet based on the fairy tale. The sculptor Edward Eriksen created the statue, which was unveiled on 23 August 1913. His wife, Eline Eriksen, was the model" , lat: 55.69273, lng: 12.599},
                    {monument: "Børsen", description:"Børsen (English: The Stock Exchange) is a building on Slotsholmen in central Copenhagen, Denmark. It was built by Christian IV in 1619–1640 and is the oldest stock exchange in Denmark. It is known especially for its Dragon Spire shaped as the tails of four dragons twined together, reaching a height of 56 metres." , lat: 55.4032, lng: 12.5840127},
                    {monument: "The Statue of Absalon", description:"Absalon or Axel (c.?1128 – 21 March 1201) was a Danish archbishop and statesman, who was the Bishop of Roskilde from 1158 to 1192 and Archbishop of Lund from 1178 until his death. He was the foremost politician and churchfather of Denmark in the second half of the 12th century, and was the closest advisor of King Valdemar I of Denmark. He was a key figure in the Danish policies of territorial expansion in the Baltic Sea, Europeanization in close relationship with the Holy See, and reform in the relation between the Church and the public. He combined the ideals of Gregorian Reform ideals with loyal support of a strong monarchical power." , lat: 55.677959, lng: 12.579989},
                    {monument: "", description:"" , lat: 55.6000, lng: 12.5800},
                    {monument: "", description:"" , lat: 55.6000, lng: 12.5800},
                    {monument: "", description:"" , lat: 55.6000, lng: 12.5800},
                    {monument: "", description:"" , lat: 55.6000, lng: 12.5800},
                    {monument: "", description:"" , lat: 55.6000, lng: 12.5800},
                    {monument: "", description:"" , lat: 55.6000, lng: 12.5800},
                    {monument: "", description:"" , lat: 55.6000, lng: 12.5800},
                    {monument: "", description:"" , lat: 55.6000, lng: 12.5800},
                ]
            ;

        return {
            getAll: function(){
                return geolist;
            }
        }

    })
