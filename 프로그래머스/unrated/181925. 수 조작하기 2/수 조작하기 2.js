function solution(numLog) {
    str=''
    for(i=0;i<numLog.length-1;i++)
        // for(j=1;j<numLog.length;j++)
        if(numLog[i+1]-numLog[i]===1)str+="w"
        else if(numLog[i+1]-numLog[i]===-1)str+="s"
        else if(numLog[i+1]-numLog[i]===10)str +="d"
        else if (numLog[i+1]-numLog[i]===-10)str +="a"
    return str
}