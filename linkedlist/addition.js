function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const arrayList1: number[] = [];
  let temp1: ListNode = l1;
  while (temp1) {
    arrayList1.push(temp1.val);
    temp1 = temp1?.next;
  }

  const arrayList2: number[] = [];
  let temp2: ListNode = l2;
  while (temp2) {
    arrayList2.push(temp2.val);
    temp2 = temp2?.next;
  }

  let finalL1 = "";
  const l1Str = arrayList1.toString();
  for (let i = l1Str.length - 1; i > -1; i--) {
    if (l1Str[i] != ",") {
      finalL1 += l1Str[i];
    }
  }
  let finalL2 = "";
  const l2Str = arrayList2.toString();
  for (let i = l2Str.length - 1; i > -1; i--) {
    if (l1Str[i] != ",") {
      finalL2 += l2Str[i];
    }
  }
  let AnsArray: number[] = [];
  for (
    let i = 0;
    i < (Number(finalL1) + Number(finalL2)).toString().length;
    i++
  ) {
    AnsArray.push(Number((Number(finalL1) + Number(finalL2)).toString()[i]));
  }
  console.log("Hey",AnsArray);


  let listNode1: ListNode;
  for (let k = 0; k < AnsArray.length -1; k++) {
    listNode1 = new ListNode(AnsArray[k], new ListNode(AnsArray[k + 1]));
  }

  return listNode1;
}
