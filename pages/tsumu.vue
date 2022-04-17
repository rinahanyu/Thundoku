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

    <div class="list">
      <h4>List</h4>
      <ul v-for="(item, index) in tsundokus" :key="index">
        <li>
          title: {{ item.data.title }}
          content: {{ item.data.content }}
          <v-btn @click="updateCompleteAction(index)"
            rounded
            x-small
            color="primary"
            dark
          >
            edit
          </v-btn>
          <v-btn @click="deleteAction(item.id)"
            rounded
            x-small
            color="error"
            dark
          >
            delete
          </v-btn>
        </li>
        <!-- <li>content: {{ item.content }}</li>
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
        </li> -->
      </ul>
    </div>
    <div id="overlay" v-show="showEditContent">
      <div id="content">
        <div class="edit">
          <button v-on:click="closeEditContent" style="float: right;"><h4>✖︎</h4></button>
          <h3 style="padding-bottom: 20px;">Edit</h3>
          <div class="edit_input" style="padding-bottom: 20px;">
            <input v-model="editIndex" type="hidden">
            <p><b>title: </b><br><input v-model="editTitle" type="text" placeholder="title" style="width: 80%;"></p>
            <p><b>content: </b><br><input v-model="editContent" type="text" placeholder="content" style="width: 80%;"></p>
            <p><input v-model="originTitle" type="hidden"></p>
            <p><input v-model="editDocId" type="hidden"></p>
          </div>
          <v-btn @click="updateConfirmAction()"
            rounded
            color="primary"
            dark
          >
            update!
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Tundoku } from 'types/tsundoku'
import { getFirestore, collection, addDoc, query, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import '@/assets/css/common.css'

@Component({
  layout!: 'tsundoku'
})
export default class Tsumu extends Vue {
  tsundokus: Array<Tundoku> = []
  title: string = ''
  content: string = ''
  editIndex: number = 0
  editDocumentId: number = 0
  editTitle: string = ''
  editContent: string = ''
  originTitle: string = ''
  editDocId: string = ''
  editFlg: boolean = false
  showEditContent: boolean = false

  async createAction ():void {
    const db = getFirestore()
    const docRef = await addDoc(collection(db, 'want_lists'), {
      content: this.content,
      title: this.title
    })
    this.tsundokus.push({ id: '', data: { title: this.title, content: this.content } })
    location.reload()
    console.log(docRef)
    this.title = ''
    this.content = ''
  }

  async updateConfirmAction ():void {
    const db = getFirestore()
    const updateRef = doc(db, 'want_lists', this.editDocId)

    await updateDoc(updateRef, {
      title: this.editTitle,
      content: this.editContent
    })
    this.showEditContent = false
    alert('更新しました')
    location.reload()
  }

  updateCompleteAction (index: number):void {
    this.showEditContent = true
    this.editIndex = index
    this.editTitle = this.tsundokus[index].data.title
    this.editContent = this.tsundokus[index].data.content
    this.editDocId = this.tsundokus[index].id
  }

  async deleteAction (id: number):void {
    if (await confirm('削除してよろしいですか？')) {
      const db = getFirestore()
      await deleteDoc(doc(db, 'want_lists', id))
      alert('削除しました')
      location.reload()
    }
  }

  closeEditContent ():void {
    this.showEditContent = false
  }

  async tundokuCreated (): void {
    const db = getFirestore()
    const q = query(collection(db, 'want_lists'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data())
      console.log(doc.data().title)
      // tsundoku = [id => doc.id, title => doc.data().title, content => doc.data().title]
      this.tsundokus.push({ id: doc.id, data: doc.data() })
    })
  }

  mounted () {
    this.tundokuCreated()
  }
}
</script>
