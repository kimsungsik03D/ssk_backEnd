import express, { Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const ASSISTANT_ID= "asst_zQI9FbRvsAhJzXFvzLNlLkdF"
const QUESTION = "일반적인 크림파스타를 만드는 레시피를 단계별로 설명해 줄수있어?"

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openAiRun = async() =>{
  
  // 어시스턴트 생성
  // 어시스턴트는 매번 생성 할 필요는 없다. 만약 필요한 어시스턴트가 없다면 그떄 생성한다. (어시스턴트 생성은 과금 X)
  // const assistant = await openai.beta.assistants.create({
  //   name:"Recipe 전문가",
  //   instructions:"사용자가 요리법을 요청할 때, 관련 레시피 데이터베이스에서 정보를 검색하고, 이해하기 쉽고 실행 가능한 조리법을 단계별로 설명 해주세요.",
  //   model:"gpt-4-1106-preview",
  //   tools:[{"type":"retrieval"}]}
  // )


  // gpt 기준으로 하나의 prompt(채팅창)을 여는것이라고 생각해도 된다.
  const thread = await openai.beta.threads.create();


  // 질문 list를 통해 계속된 질문을 반복하고 만약 질문이 끝난다면 while문을 종료 시킨다.
  let keepAsking = true;
  while (keepAsking) {

    // thread에 메시지를 입력한다.
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: QUESTION,
      //file_ids: [file.id],
    });


      // thread에 메시지 입력한것을 GPT에 전송
      const run = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: ASSISTANT_ID
      });
      
      // 전송 상태를 기록한다.
      let runStatus = await openai.beta.threads.runs.retrieve(
      thread.id,
      run.id
      );

      // 전송 상태 중 completerd가 return되기까지 n초마다 정보를 요청하여 새로 update한다.
      // This should be made more robust.
      while (runStatus.status !== "completed") {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      }
      
      // 응답값 중 메시지를 가져온다.
      const messages = await openai.beta.threads.messages.list(thread.id);

      // text형식으로 반환되어 출력
      console.log('messages : ',messages.data[0].content[0].text.value);
      
      keepAsking = false

  }
}





router.get("/connect", (req: Request, res: Response) => {

    openAiRun();
    
    return res.status(200).json({ message: "is Cool" });
  });


export default router;