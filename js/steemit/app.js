const dsteem = require('dsteem');
var Remarkable = require('remarkable');

let opts = {};

opts.addressPrefix = 'STM';
opts.chainId =
    '0000000000000000000000000000000000000000000000000000000000000000';

const client = new dsteem.Client('https://api.steemit.com');

window.onload = async () => {
    const query = {
        tag: 'sygnetproject',
        limit: 50,
        start_author: 'sygnetproject'
    };
    client.database
        .getDiscussions('blog',query)
        .then(result => {
            if (result) {
                let i=0;
                let order = {};
                result.forEach(post => {
                    order[post.permlink] = i;
                    i++;
                });
                i=0;

                result.forEach(post => {
                   
                        client.database.call('get_content', [post.author, post.permlink]).then(result => {

                            var md = new Remarkable({ html: false, linkify: false });
                            var json = JSON.parse(result.json_metadata);
                            var image = json.image ? json.image[0] : 'img/applying-ssi-to-retail.png';
                            var title = result.title;
                            var test = md.render(result.body);
                            var url = result.url;
                            var created = new Date(post.created).toDateString();
 
                            var test1;
                            test1 = test.replace(/<\/?[^>]+(>|$)/g, "");
                            test1 = test1.substring(0,105);

                            if(order[result.permlink] == 0){
                                $('#p_last').prepend('<div class="col-sm-12 col-md-8" id="el_'+order[result.permlink]+'"><a href="https://steemit.com'+url+'" target="_blank" title="'+title+'" data-aos="fade-up"><img class="img-fluid" src="'+image+'" alt="'+title+'"></a></div><div class="col-sm-12 col-md-4"><div class="news" data-aos="fade-up"><h4><a href="https://steemit.com'+url+'" target="_blank" title="'+title+'">'+title+'</a></h4><div class="date">'+created+'</div><p>'+test1+'</p><a href="https://steemit.com'+url+'" target="_blank" class="btn c-blue empty chdir">Read more<img class="img-fluid" src="img/arrow.svg" alt=""></a></div></div></div><div class="row" id="otherPosts">');
                            }else{
                                let before = null;
                                for(let i=(order[result.permlink]-1);i>=0;i--){
                                    if($('#p_others #el_'+i).length){
                                        before = $('#p_others #el_'+i);
                                        break;
                                    }
                                }
                                if(before)
                                    before.after('<div class="col-sm-12 col-md-4" id="el_'+order[result.permlink]+'"><div class="news" data-aos="fade-up"><a href="https://steemit.com'+url+'" title="'+title+'" target="_blank"><img class="img-fluid post-img" src="'+image+'" alt="'+title+'"></a><h4><a href="https://steemit.com'+url+'" title="'+title+'" target="_blank">'+title+'</a></h4><div class="date">'+created+'</div><p>'+test1+' ...</p><a href="https://steemit.com'+url+'" target="_blank" class="btn c-blue empty chdir">Read more<img class="img-fluid" src="img/arrow.svg" alt=""></a></div></div>');
                                else
                                    $('#p_others').prepend('<div class="col-sm-12 col-md-4" id="el_'+order[result.permlink]+'"><div class="news" data-aos="fade-up"><a href="https://steemit.com'+url+'" title="'+title+'" target="_blank"><img class="img-fluid post-img" src="'+image+'" alt="'+title+'"></a><h4><a href="https://steemit.com'+url+'" title="'+title+'" target="_blank">'+title+'</a></h4><div class="date">'+created+'</div><p>'+test1+' ...</p><a href="https://steemit.com'+url+'" target="_blank" class="btn c-blue empty chdir">Read more<img class="img-fluid" src="img/arrow.svg" alt=""></a></div></div>');
                            }
                        });
                });
                
            } else {
                $('#render-posts_steemit').text('No result.');
            }
        })
        .catch(err => {
            console.log(err);
            // alert(`Error:${err}, try again`);
        });
};
