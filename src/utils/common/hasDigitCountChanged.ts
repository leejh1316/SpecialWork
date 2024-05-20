export function hasDigitCountChanged(prevNumber:number, currentNumber:number):boolean {
    // 자릿수를 계산하기 위해 숫자를 문자열로 변환하고, 그 길이를 측정합니다.
    const prevDigits = prevNumber.toString().length;
    const currentDigits = currentNumber.toString().length;
  
    // 이전 숫자와 현재 숫자의 자릿수가 다르면 true, 같으면 false를 반환합니다.
    return prevDigits !== currentDigits;
}