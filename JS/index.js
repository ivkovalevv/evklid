document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.section-job__default').forEach(function(job_default){
    job_default.classList.remove('tab-content-active')
    })
    console.log(document.querySelectorAll('.section-job__item'))
    document.querySelectorAll('.section-job__item').forEach(function(job__item){
        job__item.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)
            document.querySelectorAll('.section-job__block').forEach(function(job__content){
                job__content.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.section-job__item').forEach(function(item_btn){
        item_btn.addEventListener('click', function(event){
            event.target.classList.toggle('alert')
            })
        })
    })


document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#menu').classList.remove('is-active')
    document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#menu').classList.toggle('is-active')
    })
})