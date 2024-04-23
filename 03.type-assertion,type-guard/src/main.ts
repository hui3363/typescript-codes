
// ts에서는 body 가 없는 경우 null 이 될수 있기 때문에 bodyElement.innerText 접근시 오류가 발생한다.
//const bodyElement = document.querySelector('body');

// 해결방법
// 1) type assertion
const bodyElement = document.querySelector('body') as HTMLBodyElement;
// 2) ! 사용 (! : undefined와 null이 절대 아니다라는 뜻)
bodyElement!.innerText = "Hello";
// 3) type guard
if (bodyElement) {
	bodyElement.innerText = "Hello";
}

// 주의사항!
function func(arg: string | null) {
	if (arg) {
		return arg.toLowerCase();
	}
	// 잘못된 용법 (type error는 안 나지만, null이 들어왔을때 런타임 오류발생)
	// return (arg as string).toLowerCase();
}

func('hello');
func(null);

