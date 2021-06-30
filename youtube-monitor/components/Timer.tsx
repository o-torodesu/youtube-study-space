import React from "react";
import styles from "./Timer.module.sass";
import {TimeSection, SectionType, remainingTime, getCurrentSection, getNextSection} from "../lib/time_table";
import next from "next";



class Timer extends React.Component<{}, any> {
  private intervalId: NodeJS.Timeout | undefined;

  updateState() {
    const now: Date = new Date()
    const currentSection = getCurrentSection()
    if (currentSection !== null) {
      const remaining_min: number = remainingTime(now.getHours(), now.getMinutes(), currentSection.ends.h, currentSection.ends.m)
      const remaining_sec: number = (60 - now.getSeconds()) % 60
      const nextSectionType: string = (currentSection.sectionType === SectionType.Study) ? '休憩' : '作業'
      const nextSection = getNextSection()
      if (nextSection !== null) {
        const nextSectionDuration: number = remainingTime(nextSection.starts.h, nextSection.starts.m, nextSection.ends.h, nextSection.ends.m)
        let sectionMessage = ''
        if (currentSection.sectionType === SectionType.Study)
          sectionMessage = '✏️作業✏️'
        else
          sectionMessage = '☕️休憩☕️'
        this.setState({
          remaining_min: remaining_min,
          remaining_sec: remaining_sec,
          currentPartName: currentSection.partName,
          currentSectionId: currentSection.sectionId,
          nextSectionDuration: nextSectionDuration,
          nextSection: nextSectionType,
          sectionType: currentSection.sectionType,
          sectionMessage: sectionMessage,
        })
      }
    }
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      remaining_min: 0,
      remaining_sec: 0,
      currentPartName: '',
      currentSectionId: 0,
      nextSectionDuration: 0,
      nextSection: null,
      sectionType: SectionType.Break,
      sectionMessage: '☕️休憩☕️',
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.updateState()
    }, 100);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }



  render() {
    return (
        <div id={styles.timer} className={this.state.sectionType === SectionType.Study ? styles.studyMode : styles.breakMode}>
            {/* <h3 id={styles.timerTitle}>タイマー</h3> */}
            <div id={styles.timerTitle}>{this.state.sectionMessage}</div>
            <div id={styles.remaining}>
              {this.state.remaining_min}：{this.state.remaining_sec < 10 ? '0' + this.state.remaining_sec : this.state.remaining_sec}
            </div>
            <span>{this.state.currentPartName}　</span>
            <span>{this.state.currentSectionId !== 0 ? ('セクション' + this.state.currentSectionId) : ''}</span>
            <div className={styles.spacer}/>
            <div>
              <span>次は </span>
              <span>{this.state.nextSectionDuration}</span>
              <span>分 </span>
              <span>{this.state.nextSection}</span>
            </div>
        </div>
    )
  }
}

export default Timer;