$(function(){
	$('#companyInput').attr('value','');
});
	function showForm(operator,element){
		if(operator=='personal'){
			document.documentElement.style.setProperty('--company-color','rgb(0,180,197)');
			$('.form__card--background').removeClass('form__card--background--rellena');

			$('.recarga__item').removeClass('recarga__item-active');
			element.classList.add('recarga__item-active');
			interval=setInterval(()=>{
				$('.form__card--background').addClass('form__card--background--rellena');
				clearInterval(interval);
			},50);
			
		}else if(operator=='movistar'){
			document.documentElement.style.setProperty('--company-color','rgb(1,157,244)');
			$('.form__card--background').removeClass('form__card--background--rellena');

			$('.recarga__item').removeClass('recarga__item-active');
			element.classList.add('recarga__item-active');
			interval2=setInterval(()=>{
				$('.form__card--background').addClass('form__card--background--rellena');
				clearInterval(interval2);
			},100);
		}else if(operator=='claro'){
			document.documentElement.style.setProperty('--company-color','rgb(238,35,35)');
			$('.form__card--background').removeClass('form__card--background--rellena');

			$('.recarga__item').removeClass('recarga__item-active');
			element.classList.add('recarga__item-active');
			interval3=setInterval(()=>{
				$('.form__card--background').addClass('form__card--background--rellena');
				clearInterval(interval3);
			},100);
		}else if(operator=='tuenti'){
			document.documentElement.style.setProperty('--company-color','rgb(0,81,135)');
			$('.form__card--background').removeClass('form__card--background--rellena');

			$('.recarga__item').removeClass('recarga__item-active');
			element.classList.add('recarga__item-active');
			interval4=setInterval(()=>{
				$('.form__card--background').addClass('form__card--background--rellena');
				clearInterval(interval4);
			},100);
		}


		$('#companyInput').attr('value',operator);
	}

	$(function(){
		$('#name').on('keyup',function(){
			if($(this).val()!=''){
				texto=$(this).val();
				array=texto.split('');
				
				nuevotexto='';
				cont=0;
				for(i=0;i<array.length;i++){
					cont++;
					if((!isNaN(array[i]) && array[i]!=' ')){
						delete array[i];
					}else{
						if(cont>23){
							delete array[i];
						}else{
							nuevotexto+=array[i];
						}
					}

				}

				$(this).val(nuevotexto);
				$('#name-tit').html(nuevotexto);
			}else{
				$('#name-tit').html('Nombre del titular');
			}
		});


		$('#numbero').on('keyup',function(){
			if($(this).val()!=''){
				column1='';
				column2='';
				column3='';
				column4='';


				numero=$(this).val();
				array=numero.split('');
				nuevonumero='';
				cont=0;
				for(i=0;i<array.length;i++){
					cont++;
					if(cont>0 && cont<4){
						if(array[0]!=undefined && cont==1){
							column1+=array[0];
						}
						if(array[1]!=undefined && cont==2){
							column1+=array[1];
						}
						if(array[2]!=undefined && cont==3){
							column1+=array[2];
						}
						if(array[3]!=undefined && cont==3){
							column1+=array[3];
						}
						$('#col1').html(column1);
					}else if(cont>4 && cont<9){
						if(array[4]!=undefined && cont==5){
							column2+=array[4];
						}
						if(array[5]!=undefined && cont==6){
							column2+=array[5];
						}
						if(array[6]!=undefined && cont==7){
							column2+=array[6];
						}
						if(array[7]!=undefined && cont==8){
							column2+=array[7];
						}
						$('#col2').html(column2);
					}else if(cont>8 && cont<13){
						if(array[8]!=undefined && cont==9){
							column3+=array[8];
						}
						if(array[9]!=undefined && cont==10){
							column3+=array[9];
						}
						if(array[10]!=undefined && cont==11){
							column3+=array[10];
						}
						if(array[11]!=undefined && cont==12){
							column3+=array[11];
						}
						$('#col3').html(column3);
					}else if(cont>12 && cont<17){
						if(array[12]!=undefined && cont==13){
							column4+=array[12];
						}
						if(array[13]!=undefined && cont==14){
							column4+=array[13];
						}
						if(array[14]!=undefined && cont==15){
							column4+=array[14];
						}
						if(array[15]!=undefined && cont==16){
							column4+=array[15];
						}
						$('#col4').html(column4);
					}
					if((isNaN(array[i]) && array[i]!=' ')){
						delete array[i];
					}else{
						if(cont>16){
							delete array[i];
						}else{
							nuevonumero+=array[i];
						}
					}
				}

				$(this).val(nuevonumero);
			}else{
				$('#col1').html('XXXX');
				$('#col2').html('XXXX');
				$('#col3').html('XXXX');
				$('#col4').html('XXXX');
			}
		});


		$('#mes').on('keyup',function(){
			if($(this).val()!=''){
				mesval=$(this).val();
				array=mesval.split('');
				nuevomes='';
				cont=0;
				for(i=0;i<array.length;i++){
					cont++;
					if((isNaN(array[i]) && array[i]!=' ')){
						delete array[i];
					}else{
						if(cont>2){
							delete array[i];
						}else{
							nuevomes+=array[i];
						}
					}

				}
				$(this).val(nuevomes);
				$('#mm').html(nuevomes);

				if($(this).val()==''){
					$('#mm').html('MM');
				}


				if($(this).val()>12){
					$(this).css('box-shadow','0 0 3px #f00');
				}else{
					$(this).css('box-shadow','0 0 3px #0005');
				}
			}else{
				$('#mm').html('MM');
			}
		});


		$('#anio').on('keyup',function(){
			if($(this).val()!=''){
				anioval=$(this).val();
				array=anioval.split('');
				nuevoanio='';
				cont=0;
				for(i=0;i<array.length;i++){
					cont++;
					if((isNaN(array[i]) && array[i]!=' ')){
						delete array[i];
					}else{
						if(cont>2){
							delete array[i];
						}else{
							nuevoanio+=array[i];
						}
					}

				}
				$(this).val(nuevoanio);
				$('#yy').html(nuevoanio);

				if($(this).val()==''){
					$('#yy').html('YY');
				}

				if($(this).val()>9 && $(this).val()<22){
					$(this).css('box-shadow','0 0 3px #f00');
				}else{
					$(this).css('box-shadow','0 0 3px #0005');
				}
			}else{
				$('#yy').html('YY');
			}
		});


		$('#segcod').on('keyup',function(){
			if($(this).val()!=''){
				codval=$(this).val();
				array=codval.split('');
				nuevocod='';
				cont=0;
				for(i=0;i<array.length;i++){
					cont++;
					if((isNaN(array[i]) && array[i]!=' ')){
						delete array[i];
					}else{
						if(cont>4){
							delete array[i];
						}else{
							nuevocod+=array[i];
						}
					}

				}
				$(this).val(nuevocod);
				$('#cc').html(nuevocod);

				if($(this).val()==''){
					$('#cc').html('CVV');
				}
			}else{
				$('#cc').html('CVV');
			}
		});
	});