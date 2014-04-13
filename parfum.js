$(function ()
{
    var url  = location.href,
        title = document.title,
        img = this.location.origin + '/i/logo.png'
        text = $('.share-text').text(),
        share =
        {
            vk: function(purl, ptitle, pimg, text) {
                url = 'http://vkontakte.ru/share.php?'
                    + 'url='          + encodeURIComponent(purl)
                    + '&title='       + encodeURIComponent(ptitle)
                    + '&description=' + encodeURIComponent(text)
                    + '&image='       + encodeURIComponent(pimg)
                    + '&noparse=true'

                this.popup(url)
            },
            odnoklassniki: function(purl, text) {
                url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
                    + '&st.comments=' + encodeURIComponent(text)
                    + '&st._surl='    + encodeURIComponent(purl)

                this.popup(url)
            },
            facebook: function(purl, ptitle, pimg, text) {
                url = 'http://www.facebook.com/sharer.php?s=100'
                    + '&p[title]='     + encodeURIComponent(ptitle)
                    + '&p[summary]='   + encodeURIComponent(text)
                    + '&p[url]='       + encodeURIComponent(purl)
                    + '&p[images][0]=' + encodeURIComponent(pimg)

                this.popup(url)
            },
            twitter: function(purl, ptitle) {
                url = 'http://twitter.com/share?';
                    + 'url='       + encodeURIComponent(purl)
                    + '&text='     + encodeURIComponent(ptitle)
                    + '&counturl=' + encodeURIComponent(purl)

                this.popup(url);
            },
            mailru: function(purl, ptitle, pimg, text) {
                url = 'http://connect.mail.ru/share?';
                    + 'url='          + encodeURIComponent(purl)
                    + '&title='       + encodeURIComponent(ptitle)
                    + '&description=' + encodeURIComponent(text)
                    + '&imageurl='    + encodeURIComponent(pimg)

                this.popup(url)
            },

            popup: function(url) {
                window.open(url,'','toolbar=0,status=0,width=626,height=436');
            }
        }

    $('.share.facebook').on('click', function () {
        share.facebook(url, title, img, text)
    })

    $('.share.vk').on('click', function () {
        share.vk(url, title, img, text)
    })

    $('.share.odnoklassniki').on('click', function () {
        share.odnoklassniki(url, title)
    })

    $('.share.twitter').on('click', function () {
        share.twitter(url, title)
    })

    $('.share.mailru').on('click', function () {
        share.mailru(url, title, img, '')
    })

    var imageUrls = ['gallery/1.jpg', 'gallery/2.jpg', 'gallery/3.jpg', 'gallery/4.jpg', 'gallery/5.jpg'],
        head = $('.head')

    $.each(imageUrls, function () {
        $('<div/>')
            .addClass('head-img')
            .css('background-image', 'url('+ this.toString() +')')
            .appendTo(head)
    })

    var images = head.find('.head-img')

    images
        .first().addClass('current')
        .next().addClass('next')

    function switchImage ()
    {
        images.filter('.current').fadeOut(2000, function ()
        {
            $(this)
                .removeClass('current')
                .fadeIn()

            var next = images
                .filter('.next')
                .removeClass('next')
                .addClass('current')
                .next()

            if (!next.length)
                next = images.first()

            next.addClass('next')

            setTimeout(switchImage, 5000)
        })

    }

    setTimeout(switchImage, 5000)
})