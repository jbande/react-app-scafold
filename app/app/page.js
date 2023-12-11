import Layout from "./layout";
import Position from "../../components/Trainings/Position";
import BoxModel from "../../components/Trainings/BoxModel";
import Canvas3d from "../../components/canvas3d/canvas3d";
export default function Dashboard() {
    return (
        <div style={{height: '1289px'}}>
            {/*<Position/>*/}
            {/*<BoxModel />*/}
            <Canvas3d />
        </div>
    )
}

// Dashboard.getLayout = function getLayout(page) {
//     return (
//         <Layout>
//             {page}
//         </Layout>
//     )
// }

