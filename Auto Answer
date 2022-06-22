let u;
if(location.href.split("challenge/")[1].includes('single-player')){
u= location.href.split("challenge/")[1].split('*single')[0]
} else{
u= location.href.split("challenge/")[1]
}
fetch("https://kahoot.it/rest/challenges/" + location.href.split("challenge/")[1] + "/answers", {
		"headers": {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9",
			"content-type": "application/json",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"ChromeOS\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"x-kahoot-tracking": "platform/Web"
		},
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": null,
		"method": "GET",
		"mode": "cors",
		"credentials": "include"
	})
	.then(response => response.json())
	.then(function(r) {
		for (let i = 0; i < r.challenge.kahoot.questions.length; i++) {
			for (let o = 0; o < r.challenge.kahoot.questions[i].choices.length; o++) {
				if (r.challenge.kahoot.questions[i].choices[o].correct === true) {
                  if(typeof document.querySelectorAll('label')[0] !='undefined'){
					if (document.querySelectorAll('label')[0].outerText === 'Select one or more answers!') {
						console.log('quiz')
						for (let h = 0; h < document.getElementsByClassName('sc-dkmKpi jsUBgC question-choices__QuestionChoices-sc-vfgbd-0 gRAFXc')[0].childNodes.length; h++) {
							if (document.getElementsByClassName('sc-dkmKpi jsUBgC question-choices__QuestionChoices-sc-vfgbd-0 gRAFXc')[0].childNodes[h].outerText === r.challenge.kahoot.questions[i].choices[o].answer) {
								document.getElementsByClassName('sc-dkmKpi jsUBgC question-choices__QuestionChoices-sc-vfgbd-0 gRAFXc')[0].childNodes[h].click()
							}
						}
					} else if(document.querySelectorAll('[font-size="2.8933333333333335"]').length === 2){
						console.log('tof')
						for (let h = 0; h < document.querySelectorAll('[font-size="2.8933333333333335"]').length; h++) {
							if (document.querySelectorAll('[font-size="2.8933333333333335"]')[h].outerText === r.challenge.kahoot.questions[i].choices[o].answer) {
								document.querySelectorAll('[font-size="2.8933333333333335"]')[h].click()
							}
						}
                    }
					} else {
						console.log('original kahoot')
						for (let h = 0; h < document.getElementsByClassName('sc-dkmKpi jsUBgC question-choices__QuestionChoices-sc-vfgbd-0 dtiAQP')[0].childNodes.length; h++) {

							if (document.getElementsByClassName('sc-dkmKpi jsUBgC question-choices__QuestionChoices-sc-vfgbd-0 dtiAQP')[0].childNodes[h].outerText === r.challenge.kahoot.questions[i].choices[o].answer) {
								document.getElementsByClassName('sc-dkmKpi jsUBgC question-choices__QuestionChoices-sc-vfgbd-0 dtiAQP')[0].childNodes[h].click()
							}
						}

					}
				}
			}
		}
	})
