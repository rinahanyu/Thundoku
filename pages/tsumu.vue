<template>
  <div class="content">
    <h1>Thundoku!</h1>
    <div class="register">
      <h4>Register</h4>
      <ul>
        <li><input v-model="title" type="text" placeholder="title"></li>
        <li><input v-model="content" type="text" placeholder="content"></li>
        <li v-if="editFlg">
          !Editing
        </li>
        <li v-else>
          <button @click="createAction">
            create!
          </button>
        </li>
      </ul>
    </div>

    <div class="edit">
      <h4>Edit</h4>
      <ul>
        <li><input v-model="editIndex" type="hidden"></li>
        <li><input v-model="editTitle" type="text" placeholder="title"></li>
        <li><input v-model="editContent" type="text" placeholder="content"></li>
        <li>
          <button @click="updateConfirmAction">
            update!
          </button>
        </li>
      </ul>
    </div>

    <div class="list">
      <h4>List</h4>
      <ul v-for="(item, index) in tsundokus" :key="index">
        <li>title: {{ item.title }}</li>
        <li>content: {{ item.content }}</li>
        <li>
          <button @click="updateCompleteAction(index)">
            Go Edit!
          </button>
        </li>
        <li v-if="editFlg">
          !Editing
        </li>
        <li v-else>
          <button @click="deleteAction(index)">
            Go Delete!
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Tundoku } from 'types/tsundoku'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

@Component({
  layout!: 'tsundoku'
})
export default class Tsumu extends Vue {
  tsundokus: Array<Tundoku> = []
  title: string = ''
  content: string = ''
  editIndex: number = 0
  editTitle: string = ''
  editContent: string = ''
  editFlg: boolean = false

  createAction ():void {
    this.tsundokus.push({ title: this.title, content: this.content })
    const db = getFirestore()
    const docRef = addDoc(collection(db, 'want_lists'), {
      content: this.content,
      title: this.title
    })
    console.log(docRef)
    this.title = ''
    this.content = ''
  }

  updateConfirmAction (index: number):void {
    this.editFlg = true
    this.editIndex = index
    this.editTitle = this.tsundokus[index].title
    this.editContent = this.tsundokus[index].content
  }

  updateCompleteAction ():void {
    this.tsundokus[this.editIndex].title = this.editTitle
    this.tsundokus[this.editIndex].content = this.editContent
    this.editFlg = false
    this.editIndex = 0
    this.editTitle = ''
    this.editContent = ''
  }

  deleteAction (index: number):void {
    this.tsundokus.splice(index, 1)
  }
}
</script>
