const request = require('request');
const cheerio = require('cheerio');
const options = {
  uri: `https://www.instagram.com/mundotarjeticas/`,
  transform: function (body) {
    return cheerio.load(body);
  }
};
request('https://www.instagram.com/mundotarjeticas/',function(error,response, html){
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var e_arr = []
        $('script').each(function(i,elment){
            try{

                
                try{
                    if(elment.children[0].data.match(/window._sharedData = {"config":{"csrf_token"/).index !== ''){
                        e_arr.push((elment.children[0].data))
                    }
                    
                }catch(e){

                }
                
            }catch(e){

            }
            
        })
        var d = eval(e_arr[0].replace('window._sharedData =',''))
        console.log('tag', d)

    }
})