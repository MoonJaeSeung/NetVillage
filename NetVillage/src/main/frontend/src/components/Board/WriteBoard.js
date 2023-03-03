import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Button, Input, Select, Space} from "antd";
import {useLocation} from "react-router-dom";

const WriteBoard = () => {
    const location = useLocation();

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className='boardWriteContainer'>
            <div className='form-wrapper'>
                <Space wrap
                       style={{
                           marginBottom: "1rem",
                       }}>
                    <Select
                        defaultValue={location.state.category}
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: '자유게시판',
                                label: '자유게시판',
                            },
                            {
                                value: '팁게시판',
                                label: '팁게시판',
                            },
                            {
                                value: '거래게시판',
                                label: '거래게시판',
                            },
                        ]}
                    />
                <Input placeholder="제목" />
                </Space>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>어쩌다 짝꿍의 커뮤니티입니다.</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
                <Button type="primary"
                        style={{
                            marginTop: "2rem",
                        }}>글작성</Button>
            </div>
        </div>
    );
};

export default WriteBoard;
