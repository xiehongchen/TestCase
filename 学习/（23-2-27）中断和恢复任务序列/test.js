/**
 * 依次执行一系列任务
 * 所有任务全部完成可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，即不可中断，只能再两个任务之间中断
 * @param {...Function} tasks 任务列表，每个任务无参、异步
 */

function processTasks(...tasks) {
    /**  
     * 要求：所有任务全部完成后可以得到每个任务的执行结果，每个任务无参、异步
     * return Promise.all(tasks);
     * 但需要依次顺序执行一系列任务，因此Promise.all()不可用
    */

    /**
     * 要求：依次执行一系列任务
     * 那只用循环判断即可
     */

    /**
     * 要求：需要返回两个方法，start用于启动任务，parse用于暂停任务，每个任务具有原子性，即不可中断，只能再两个任务之间中断
     * 也就是说，只能再两个任务之间中断，如果在一个任务期间进行中断，但不会立即中断，而是等到该任务执行完成后再中断
     */
    // 是否进行中断,该表示为中断
    isRunning = false;
    const result = [];  //  接收每个任务的执行结果
    let i = 0;  //  当前任务执行的下标
    let prom = null;    //  定义一个结果的promise，存储每promise状态
    return {
        // 启动任务
        start() {
            // 手动控制promise
            return new Promise(async (resolve, reject) => {
                // 进行判断，要么全部完成，返回完成结果，要么失败了，返回失败结果。但不管成功失败都会结束
                if(prom){
                    prom.then(resolve,reject);
                    return;
                }
                // 多次点击start会导致多个循环进行，需要判断，如果当前正在运行，就不要做任何事情
                if(isRunning){
                    return;
                }
                // 没有中断，正在运行
                isRunning = true;
                // 遍历tasks，将执行结果放到result中
                // 如果使用for循环，那么每一次启动任务都会从第一个开启，因此我们需要保存好当前任务执行的下标
                // 以便我们下一次启动任务时,会按照之前的循环继续执行
                // for(let i = 0; i < tasks.length; i++){
                while (i < tasks.length) {
                    try {
                        console.log(i,"执行中~");
                        result.push(await tasks[i]());
                        console.log(i,"执行完成~");
                    }
                    catch (err) {
                        isRunning = false;
                        reject(err);
                        prom = Promise.reject(err);
                        return;
                    }

                    // 表示下一次就是执行下一个任务了
                    i++;
                    // 中断，判断是否为最后一个，最后一个中断没有意义
                    if (!isRunning && i < tasks.length) {
                        console.log("执行被中断~");
                        // 中断即结束，以完成的形式结束promise，返回undefined
                        return;
                    }
                }
                isRunning = false;
                // 成功
                resolve(result);
                prom = Promise.resolve(result);
            });
        },
        // 暂停任务
        // 不需要做其他业务逻辑，只需要设置是否中断这个变量即可
        pause() {
            isRunning = false;
        }
    }
}