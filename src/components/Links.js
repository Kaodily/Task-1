import { datas } from './Data'
export default function Links() {
  return (
      <div>
          {datas.map((data,index) => {
              return (
                  <div key={index}>
                      <button id={data.id} className='link_buttons'>
                      <a href={data.link}>{data.name}</a> 
                      </button>
                  </div>
              )
          })}
          <div className='icons'>
              <img src="./assets/slack.jpg" alt="slack-icon" className='slack_icon' />
              <img src="./assets/icon.jpg" alt="github-icon" />
          </div>
</div>
    )
}
