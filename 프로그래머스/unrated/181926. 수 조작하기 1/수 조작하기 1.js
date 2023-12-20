function solution(n, control) {
    w=[]
    s=[]
    d=[]
    a=[]
  arr = Array.from(control)
    for(i=0;i<arr.length;i++)
     if(arr[i]==='w')w.push(arr[i])
     else if(arr[i]==='d')d.push(arr[i])
     else if(arr[i]==='s')s.push(arr[i])
     else if(arr[i]==='a')a.push(arr[i])
  return n+1*(w.length-s.length)+10*(d.length-a.length)
}