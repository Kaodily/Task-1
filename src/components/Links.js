import { datas } from './Data'
export default function Links() {
  return (
      <div>
          {datas.map((data,index) => {
              return (
                  <div key={index}>
                      <button id={data.id} className='link_buttons'>
                      <a href={data.link}>{data.name}</a> <br />
                      <sub>{ data.text}</sub>
                      </button>
                  </div>
              )
          })}
          <div className='icons'>
              <a href="https://hng9.slack.com">
              <img src="./assets/slack.jpg" alt="slack-icon" className='slack_icon' />
              </a>
              <a href="https://github.com/Kaodily">     
              <img src="./assets/icon.jpg" alt="github-icon" />
              </a>
          </div>
</div>
    )
}
