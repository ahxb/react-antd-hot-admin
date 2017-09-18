$(function () {


    //modal 移动
    $(window).on('mousedown',function (e) {



        if($(e.target).hasClass('ant-modal-header')||$(e.target).hasClass('ant-modal-title')){
        e.preventDefault();
        e.stopPropagation();

        let $obj=$(e.target).closest('.ant-modal');
        let positionDiv = $obj.offset();

        let distenceX ='';
        let distenceY ='';
        if( $obj.length!==0){
            distenceX = e.pageX - positionDiv.left;
            distenceY = e.pageY - positionDiv.top;


                $(window).on('mousemove',function(ent){

                    let x = ent.pageX-distenceX;
                    let y = ent.pageY-distenceY;

                    if(x<0){
                        x=0;
                    }else if(x>$(document).width()-$obj.outerWidth(true)){
                        x = $(document).width()-$obj.outerWidth(true);
                    }
                    if(y<0){
                        y=0;
                    }else if(y>$(document).height()-$obj.outerHeight(true)){
                        y = $(document).height()-$obj.outerHeight(true);
                    }
                    $obj.css({
                        'left':x+'px',
                        'top':y+'px'
                    });

                })
            }

        }


    });
    $(window).on('mouseup',function (e) {
        $(window).off('mousemove')
    })





})